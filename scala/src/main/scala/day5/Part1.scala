package day5

import java.security.MessageDigest

object Part1 extends App {

  def md5(s: String) =
    MessageDigest.getInstance("MD5").digest(s.getBytes).map("%02X".format(_)).mkString

  def findPassCode(doorId: String): String = {
    Stream
      .from(0)
      .map(n => doorId + n)
      .map(md5)
      .filter(h => h.startsWith("00000"))
      .map(h => h(5))
      .take(8)
      .mkString
  }
}
