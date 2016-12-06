package day5

import java.security.MessageDigest

object Part1 extends App {

  def md5(s: String) =
    MessageDigest.getInstance("MD5").digest(s.getBytes).map("%02X".format(_)).mkString

  def findPassCode(doorId: String): String = {
    var passcode = ""
    var count = 0

    while (passcode.length < 8) {
      val hash = md5(doorId + count)
      if (hash.startsWith("00000")) passcode = passcode + hash.drop(5).take(1)
      count = count + 1
    }

    passcode
  }


}
