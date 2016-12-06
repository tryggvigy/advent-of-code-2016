package day5

import java.security.MessageDigest
import scala.util.Try

object Part2 {

  def md5(s: String) =
    MessageDigest.getInstance("MD5").digest(s.getBytes).map("%02X".format(_)).mkString

  def updateAtIndex(s: String, i: Int, v: String) =
    s.split("").updated(i, v).mkString

  def posCharIsValid(posChar: String): Boolean =
    Try(posChar.toInt).toOption match {
      case Some(x) if 0 until 8 contains x => true
      case _ => false
    }

  def findPassCode(doorId: String): String = {
    var passcode = "________"
    var count = 0

    while (passcode.contains("_")) {
      val hash = md5(doorId + count)
      val posChar = hash.drop(5).take(1)
      if (hash.startsWith("00000") && posCharIsValid(posChar)) {
        val code = hash.drop(6).take(1)
        if (passcode.charAt(posChar.toInt) == '_') {
          passcode = passcode.split("").updated(posChar.toInt, code).mkString
          println(passcode)
        }
      }
      count = count + 1
    }
    passcode
  }

}
