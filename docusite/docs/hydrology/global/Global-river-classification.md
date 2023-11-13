# GloRiC Version 1.0

The Global River Classification GloRiC provides a database of river types and sub-classifications for all river reaches globally.
https://www.hydrosheds.org/page/gloric

#### Citation

> Ouellet Dallaire, C., Lehner, B., Sayre, R., Thieme, M. (2018): A multidisciplinary framework to derive global river reach classifications at high spatial resolution. Environmental Research Letters. doi: 10.1088/1748-9326/aad8e9 (open access)

#### Data access

https://www.hydrosheds.org/page/gloric

#### Data download and preparation

```sh
mkdir -p $GISDATA/hydro/GloRic
cd $GISDATA/hydro/GloRic
## Download from sync Webpage, then mv here
mv ~/Downloads/GloRic* $GISDATA/hydro/GloRic
unzip GloRiC_v10_geodatabase.zipArchive:  GloRiC_v10_geodatabase.zip

```

```sh
psql gisdata -c "CREATE SCHEMA HydroSHEDS"
nohup ogr2ogr -overwrite -f "PostgreSQL" PG:"host=localhost user=jferrer dbname=gisdata" -lco SCHEMA=hydrosheds GloRiC_v10.gdb -nln gloric &

```


#### Interpretation in terms of the Global Ecosystem Typology

```sh
Discharge: very low (VL Q; 0.1–10 m3 s−1), low (L Q; 10–100 m3 s−1), medium (M Q; 100–1000 m3 s−1), high (H Q; 1000–10000 m3 s−1), and very high (VH Q; >10000 m3 s−1)

Flow variability: low (L Var; <2), medium (M Var; 2–3), and high (H Var; >3)

|class_hydr | discharge | flow var |  efgs |
|---|---|---|---|
|11 | VL | L | F1.1 |
|12 | VL | M | F1.4 |
|13 | VL | H | F1.6 |
|21 |  L | L | F1.1 |
|22 |  L | M | F1.4 |
|23 |  L | H | F1.6 |
|31 |  M | L | F1.2 |
|32 |  M | M | F1.2 |
|33 |  M | H | F1.5 |
|41 |  H | L | F1.2 |
|42 |  H | M | F1.2 |
|43 |  H | H | F1.5 |
|51 | VH | L | F1.7 |
|52 | VH | M | F1.7 |
|53 | VH | H | F1.7 |


 Classes are sorted in four levels of the long-term average of the minimum air temperature of the coldest month: low (L Temp, < −20 °C), medium (M Temp; −20 °C–5 °C), high (H Temp; 5 °C–20 °C), and very high (VH Temp; > 20°C);
 three levels of the climate moisture index: low (L CMI < −0.4), medium (M CMI; −0.4–0.125), and high (H CMI; > 0.125);
 and two levels of elevation: low (L Elev; <= 750 m) and high (H Elev; > 750 m).

 |class_hydr | temp | moist | elev |  efgs |
 |---|---|---|---|---|
 | 111 | L | L | L | F1.3 |
 | 112 | L | L | H | F1.3 |
 | 121 | L | M | L | F1.3 |
 | 122 | L | M | H | F1.3 |
 | 131 | L | H | L | F1.3 |
 | 132 | L | H | H | F1.3 |

 | 211 | M | L | L | F1.2 |
 | 212 | M | L | H | F1.1 |
 | 221 | M | M | L | F1.2 |
 | 222 | M | M | H | F1.1 |
 | 231 | M | H | L | F1.2 |
 | 232 | M | H | H | F1.1 |

 | 311 | H | L | L | F1.6 |
 | 312 | H | L | H | F1.6 |
 | 321 | H | M | L | F1.5 |
 | 322 | H | M | H | F1.4 |
 | 331 | H | H | L | F1.5 |
 | 332 | H | H | H | F1.4 |

 | 411 | VH | L | L | F1.6 |
 | 412 | VH | L | H | F1.6 |
 | 421 | VH | M | L | F1.5 |
 | 422 | VH | M | H | F1.4 |
 | 431 | VH | H | L | F1.5 |
 | 432 | VH | H | H | F1.4 |
```

Based on this information we can try a reclassification:

```sql
ALTER TABLE hydrosheds.gloric ADD COLUMN F1_1 boolean DEFAULT false;
ALTER TABLE hydrosheds.gloric
   ADD COLUMN F1_2 boolean DEFAULT false,
   ADD COLUMN F1_3 boolean DEFAULT false,
   ADD COLUMN F1_4 boolean DEFAULT false,
   ADD COLUMN F1_5 boolean DEFAULT false,
   ADD COLUMN  F1_6 boolean DEFAULT false,
   ADD COLUMN F1_7 boolean DEFAULT false;

CREATE INDEX f1s ON hydrosheds.gloric (F1_1,F1_2,F1_3,F1_4,F1_5,F1_6,F1_7);
```

**F1.1** high velocity and relatively low but reliable perennial volume. They flow down moderate to steep slopes steep to moderate terrain throughout the humid tropical and temperate zones, rarely extending to boreal latitudes.

```sql
EXPLAIN ANALYZE
   UPDATE hydrosheds.gloric SET F1_1=(log_q_var <2 AND temp_min > -5 AND log_elev>2.8)

SELECT F1_1,count(*) FROM hydrosheds.gloric group by F1_1;
 SELECT F1_1,F1_2,F1_3,F1_4,F1_5,F1_6,F1_7,count(*) FROM hydrosheds.gloric WHERE F1_1 GROUP BY F1_1,F1_2,F1_3,F1_4,F1_5,F1_6,F1_7 ORDER BY F1_1 DESC, F1_2 DESC, F1_3 DESC, F1_4 DESC, F1_5 DESC, F1_6 DESC, F1_7 DESC;

```

**F1.2** These rivers are distinguished by shallow gradients (typically &lt;2°), with low turbulence, low to moderate flow velocity and high to very high flow volumes which are continuous, but may vary seasonally, depending on catchment area and precipitation. Permanent lowland rivers are distributed throughout tropical and temperate lowlands, very uncommon in arid subtropical –warm temperate zones and absent from boreal zones.

```sql
EXPLAIN ANALYZE
   UPDATE hydrosheds.gloric SET F1_2=true WHERE log_q_var <2 AND temp_min > -10 AND log_elev<2.8;
SELECT F1_1,F1_2,count(*) FROM hydrosheds.gloric group by F1_1,F1_2;
```

**F1.3** In seasonally cold montane or boreal environments, the surfaces of streams freeze in winter. These rivers are characterised by low winter temperatures and seasonal freeze/thaw regimes. Restricted to boreal, subarctic, alpine and subalpine regions, with limited examples in the subantarctic and Antarctic.

```sql
UPDATE hydrosheds.gloric SET F1_3=(temp_min < -10);
SELECT F1_1,F1_2,F1_3,count(*) FROM hydrosheds.gloric group by F1_1,F1_2,F1_3;

```

**F1.4** Flow and flood regimes in these rivers are highly variable between monsoon and dry seasons, with associated changes in water quality. They may be perennial or intermittent, with flows ceasing or much reduced in the dry season. Channels are narrow with steep to modearte gradients and seasonally high velocity and sometimes large volumes of water, producing overbank flows. Elevated regions in n tropical and subtropical monsoonal climates worldwide.

```sql

select log_q_var>2 as cond1, temp_min>0 as cond2,cmi_indx>-0.4 as cond3, log_elev>2.8 as cond4,count(*) from hydrosheds.gloric where log_q_var>2 group by cond1,cond2,cond3,cond4;

EXPLAIN ANALYZE UPDATE hydrosheds.gloric SET F1_4=true WHERE (log_q_var>2 AND temp_min > 0 AND log_elev>2.8);

```

**F1.5** These rivers are driven by cyclical seasonal flow regimes. High-volume flows and floods occur during the summer monsoon season, coinciding with warm temperatures. Monsoonal regions of Asia, Africa, Australia and the Americas.

```sql
UPDATE hydrosheds.gloric SET F1_5=true WHERE (log_q_var>2 AND temp_min > 5  AND log_elev<2.8);

```


**F1.6** traits: Intermittent streams have high temporal variability in flows. These systems are distinguished by highly episodic flows and flood regimes. Long dry periods are punctuated by high-volume flows of short duration (days to weeks, rarely months) which fill channels and flood other wetlands.

```sql
UPDATE hydrosheds.gloric SET F1_6=true WHERE (log_q_var>3 AND temp_min > 0 AND cmi_indx < 0);
 SELECT F1_1,F1_2,F1_3,F1_4,F1_5,F1_6,F1_7,count(*) FROM hydrosheds.gloric WHERE F1_6 GROUP BY F1_1,F1_2,F1_3,F1_4,F1_5,F1_6,F1_7 ORDER BY F1_1 DESC, F1_2 DESC, F1_3 DESC, F1_4 DESC, F1_5 DESC, F1_6 DESC, F1_7 DESC;

```

**F1.7** Large lowland rivers should be easy become we know all the rivers based on their flow rates >~10,000 m3/s.

```sql
UPDATE hydrosheds.gloric SET F1_7=true WHERE log_q_avg>4;
SELECT F1_1,F1_2,F1_3,F1_4,F1_5,F1_6,F1_7,count(*) FROM hydrosheds.gloric WHERE F1_7 GROUP BY F1_1,F1_2,F1_3,F1_4,F1_5,F1_6,F1_7 ORDER BY F1_1 DESC, F1_2 DESC, F1_3 DESC, F1_4 DESC, F1_5 DESC, F1_6 DESC, F1_7 DESC;

```

#### Notes
*
