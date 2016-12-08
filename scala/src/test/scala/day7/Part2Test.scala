package day7

import org.scalatest.FlatSpec
import day7.Part1.{getHypernetChunks, getIpChunks, getIps}
import day7.Part2.{
  findAbas, aBaToBab, supportsSsl, findNumberOfSslIps
}

class Part2Test extends FlatSpec {
  "findAbas" should "find all aba instance in string" in {
    assert(findAbas("abba") === Set.empty)
    assert(findAbas("abababababababab") === Set("aba", "bab"))
    assert(findAbas("abakek") === Set("aba", "kek"))
  }

  "aBaToBab" should "convert aba to bab" in {
    assert(aBaToBab("aba") === "bab")
  }

  "supportsSsl" should "return true if given ip supports ssl" in {
    assert(supportsSsl("aba[babba]") === true)
    assert(supportsSsl("aba[abasf]") === false)
    assert(supportsSsl("aba[aba]lolsdasd[olo]") === true)
  }

  "findNumberOfSslIps" should "find number of ips that support ssl" in {
    assert(findNumberOfSslIps(getIps()) === 231)
    assert(findNumberOfSslIps(List(
      "aba[bab]",
      "aba[aba]",
      "aba[aba]lol[olo]"
    )) === 2)
  }
}
