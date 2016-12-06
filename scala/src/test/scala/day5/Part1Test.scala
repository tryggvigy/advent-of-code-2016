package day5

import org.scalatest.FlatSpec
import day5.Part1.{md5, findPassCode}

/*
* - find 8 instances of passChar
*   -
**/

class Part1Test extends FlatSpec {
  "md5" should "hash the given string with md5" in {
    assert(md5("abba") === "54A8723466E5D487247F3D93D51C66BC")
  }

  "findPassCode" should "find our answer" in {
    assert(findPassCode("ffykfhsq") === "C6697B55")
  }

}
