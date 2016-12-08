package day7

import org.scalatest.FlatSpec
import day7.Part1.{
  supportsTLS, getHypernetChunks, getIpChunks, findNumberOfTlsIps, getIps
}

class Part1Test extends FlatSpec {
  "supportsTLS" should "find TLS patterns in a given string" in {
    assert(supportsTLS("abba") === true)
    assert(supportsTLS("preabbapost") === true)
    assert(supportsTLS("notls") === false)
  }

  "getHypernetChunks" should "find all hypernet sequences in a given string" in {
    assert(getHypernetChunks("first[foo]second[bar]asd") === List("foo", "bar"))
  }

  "getIpChunks" should "find all hypernet sequences in a given string" in {
    assert(getIpChunks("first[foo]second") === List("first", "second"))
  }

  "findNumberOfTlsIps" should "finds the number of TLS compliant apis from given ips" in {
    assert(findNumberOfTlsIps(List(
      "abba[hello]foadsd",
      "asdd[hello]foxxod[world]basd",
      "abba[oxxo]fox"
    )) === 2)

    assert(findNumberOfTlsIps(getIps()) === 115)
  }
}
