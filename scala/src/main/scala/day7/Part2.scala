package day7

import scala.io.Source
import day7.Part1.{getHypernetChunks, getIpChunks}

object Part2 extends App {

  def findAbas(str: String) =
    (for { s <- str.sliding(3) if s(0) == s(2) } yield s).toSet

  def aBaToBab(s: String) = s(1).toString + s(0).toString + s(1).toString

  def supportsSsl(ip: String) = {
    val babs = getHypernetChunks(ip)
      .map(findAbas)
      .reduce((acc, curr) => acc ++ curr)
      .map(aBaToBab)

    getIpChunks(ip).flatMap(findAbas).exists(babs.contains)
  }

  def findNumberOfSslIps(ips: List[String]) = ips.count(supportsSsl)
}
