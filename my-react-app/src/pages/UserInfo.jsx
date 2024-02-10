import React from 'react'
import { useAuth } from '../contexts/AuthContext';
import "./UserInfo.css"
import { Header } from "../components/UserInfo/Header";
import { UserInfoContainer } from "../components/UserInfo/UserInfoContainer";

function UserInfo() 
{
  const { currentUser } = useAuth()

  const userDetails = [
    {
      "username": "JohnDoe",
      "clearNum": 10
    }
  ];

  const doneTaskRecord = [
    0, 
    10, 
    30, 
    60, 
    100
  ]

  const motivaMessage  = [
    
    // 早くTodoの内容を決めろという暗示が込められている。
    "一生迷ってろ そして失い続けるんだ…貴重な機会(チャンス)を…!」【利根川幸雄（カイジ）】",

    // 少しtodoを達成した人へ、続けて頑張れという暗示が込められている。
    "苦しいから逃げるのではない。逃げるから苦しくなるのだ。【ウィリアム･ジェームズ（心理学者）】",

    // まあまあ頑張った人へ、やる気を出してほしいという暗示が込められている。
    "目標は他人から与えられても駄目。目標はいつも自分の中から生まれてくるべきなんだ 【タイガー・ウッズ（プロゴルファー）】",

    //
    "ここまでやるのかと言われるくらいまでやって、初めて差別化できる。【流 音弥（作家）】",

    // かなりtodoをやったことで、自信がついてくるが、それを持ちすぎると失敗することがあるという暗示が込められている。
    "自信の上には奢りがあり、謙遜の下には卑屈がある。【片岡鉄心（ダイヤのA）】",

    // 
    "人がやれるのは、やれることだけだ。それをやるからこそ夜に眠れるし、明日また続けることもできる。【アルベルト・シュバイツァー（哲学者）】"
  ]

  return (
    <div className="UserInfo">
      <Header />
      <UserInfoContainer 
        userName      = {currentUser.displayName}
        userEmail     = {currentUser.email}
        clearNum      = {userDetails[0].clearNum}
        motivaMessage = { getAchievementNum(userDetails[0].clearNum, doneTaskRecord, motivaMessage) }
      />
    </div>
  )
}

function getAchievementNum(currrentClearNum, judgeDoneTaskRecord, motivaMessage) 
{
  for (let index = 0; index < judgeDoneTaskRecord.length; index++) {
    if (currrentClearNum <= judgeDoneTaskRecord[index]) {
      return motivaMessage[index];
    }
  }
  return "お前はマスターだ　！！！";
}


export default UserInfo
