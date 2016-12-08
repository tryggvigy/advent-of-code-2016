package day7

import scala.io.Source

object Part1 extends App {

  def getIps() = Source
    .fromFile("/Users/tryggvigylfason/workspace/repos/me/AdventOfCode/scala/src/main/scala/day7/ipv7.txt")
    .getLines
    .toList

  def supportsTLS(str: String) =
    (for {
      s <- str.sliding(4) if s == s.reverse && s(0) != s(1)
    } yield true).contains(true)

  def getIpChunks(str: String): List[String] =
    str.split("\\[[a-z]+\\]").toList

  def getHypernetChunks(str: String): List[String] =
    "\\[([a-z]+)\\]".r
      .findAllMatchIn(str)
      .map(_.group(1))
      .toList


  def findNumberOfTlsIps(ips: List[String]) = ips.count { ip =>
    getIpChunks(ip).exists(supportsTLS) &&
    !getHypernetChunks(ip).exists(supportsTLS)
  }
}
