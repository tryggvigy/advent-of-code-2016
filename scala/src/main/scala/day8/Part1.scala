package day8

import scala.io.Source

object Part1 extends App {

  var screen = Array.ofDim(6, 50)
  println(screen)

  abstract class Instruction
  case class Rect(x: Int, y: Int) extends Instruction
  case class RotateRow(row: Int, by: Int) extends Instruction
  case class RotateCol(col: Int, by: Int) extends Instruction

  def getInstructions = Source
    .fromFile("/Users/tryggvigylfason/workspace/repos/me/AdventOfCode/scala/src/main/scala/day8/instructions.txt")
    .getLines
    .toList

  def parse(inst: List[String]) = {

  }

}
