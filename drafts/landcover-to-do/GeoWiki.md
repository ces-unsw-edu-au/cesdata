


```r
tst <- read.table("~/tmp/T1.2-tropical-dry-forest/GlobalCrowd.tab",skip=33,header=T,sep="\t")
head(tst)
table(tst$LCC..Land.Cover.1..1...tree.cover.....)

plot(Latitude~Longitude,tst,col=LCC..Land.Cover.1..1...tree.cover.....,pch=".")
 points(Latitude~Longitude,subset(tst,LCC..Land.Cover.1..1...tree.cover..... %in% 8),pch=1,cex=.5)
 points(Latitude~Longitude,subset(tst,LCC..Land.Cover.1..1...tree.cover..... %in% 8),pch=19,col="cyan",cex=.5) # some strange snow points in unexpected areas


summary(tst$Conf..Confidence.Land.Cover..0...su....)
plot(Latitude~Longitude,subset(tst,!is.na(Conf)),col=LCC..Land.Cover.1..1...tree.cover.....,pch=".")
  points(Latitude~Longitude,subset(tst,!is.na(Conf..Confidence.Land.Cover..0...su....) & Conf..Confidence.Land.Cover..0...su.... == 0 & LCC..Land.Cover.1..1...tree.cover..... %in% 8),pch=19,col="cyan",cex=.5) # still strange snow points in unexpected areas

points(Latitude~Longitude,subset(tst,LCC..Land.Cover.1..1...tree.cover..... %in% 1),pch=19,col="green",cex=.5)
points(Latitude~Longitude,subset(tst,LCC..Land.Cover.1..1...tree.cover..... %in% 3),pch=19,col="orange",cex=.5)
```
