package day5

import day5.Part2.{posCharIsValid, findPassCode, updateAtIndex}
import org.scalatest.FlatSpec

class Part2Test extends FlatSpec {
  // takes about 8mins to run...
  "findPassCode" should "find our answer" in {
    assert(findPassCode("ffykfhsq") === "AC35D825")
  }

  "posCharIsValid" should "find our answer" in {
    assert(posCharIsValid("C") === false)
    assert(posCharIsValid("0") === true)
    assert(posCharIsValid("7") === true)
    assert(posCharIsValid("8") === false)
  }

  "updateAtIndex" should "find our answer" in {
    assert(updateAtIndex("012345", 0, "_") === "_12345")
    assert(updateAtIndex("012345", 1, "_") === "0_2345")
    assert(updateAtIndex("012345", 5, "_") === "01234_")
  }
}
