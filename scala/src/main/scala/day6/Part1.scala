package day6

import scala.io.Source

object Part1 extends App {

  def mostCommon(list: List[Char]) = list.groupBy(identity).maxBy(_._2.size)._1
  def leastCommon(list: List[Char]) = list.groupBy(identity).minBy(_._2.size)._1

  // Part 1
  val mostCommonStr = Source
    .fromFile("/Users/tryggvigylfason/workspace/repos/me/AdventOfCode/scala/src/main/scala/day6/code.txt")
    .getLines
    .toList
    .transpose
    .map(mostCommon)
    .mkString

  // Part 2
  val leastCommonStr = Source
    .fromFile("/Users/tryggvigylfason/workspace/repos/me/AdventOfCode/scala/src/main/scala/day6/code.txt")
    .getLines
    .toList
    .transpose
    .map(leastCommon)
    .mkString


    println(leastCommonStr)
}
