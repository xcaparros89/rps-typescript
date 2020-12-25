
export interface IWinProps{
    winner:[string, number],
    loser: [string, number],
    playerName:string
  }
  
export interface IGameProps{
    setWinner:React.Dispatch<React.SetStateAction<[string, number]>>,
    setLoser: React.Dispatch<React.SetStateAction<[string, number]>>,
    playerName: string
  }
  
export interface IStartProps{
    setPlayerName:React.Dispatch<React.SetStateAction<string>>,
  }