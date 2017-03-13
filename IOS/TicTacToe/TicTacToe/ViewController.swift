//
//  ViewController.swift
//  TicTacToe
//
//  Created by Joseph Zoland on 3/9/17.
//  Copyright © 2017 Joseph Zoland. All rights reserved.
//

import UIKit

class ViewController: UIViewController {

    @IBOutlet weak var WinnerLabel: UILabel!
    
    @IBOutlet var AllTicButtons: [UIButton]!
    
    var turn = 0
    var win = 0
    let winningcombos = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]]
    
    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view, typically from a nib.
        for i in AllTicButtons{
            i.setTitle("", for: .normal)
        }
        reset()
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }

    func reset() {
        for i in AllTicButtons{
            i.backgroundColor = UIColor.gray
            turn = 0
            win = 0
            WinnerLabel.isHidden = true
        }
    }
    
    @IBAction func PressResetButton(_ sender: Any) {
        reset()
    }
    
    
    func checkWin() -> Bool {
        var checkArr = [UIColor]()
        var winner = UIColor()
        if turn % 2 != 0 {
            winner = UIColor.red
        }
        else {
            winner = UIColor.blue
        }
        for i in AllTicButtons {
            if let color = i.backgroundColor {
//                print ("current array is \(checkArr)")
//                print ("i.backgroundColor is \(i.backgroundColor)")
//                print ("color of currently selected button is \(color)")
                checkArr.append(color)
            }
//            print ("final array is \(checkArr)")
        }
        for array in winningcombos {
            var count = 0
            for number in array {
//                print ("checkArr[number] is \(checkArr[number])")
//                print ("winner is \(winner)")
//                print ("checkArr[number] == winner is \(checkArr[number] == winner)")
                if checkArr[number] == winner {
                    count += 1
                }
//                print ("count is \(count)")
                if count == 3 {
                    return true
                }
            }
        }
        return false
    }
    
    
    
    @IBAction func PushTicTacToeButton(_ sender: UIButton) {
        if let currentButtonColor = AllTicButtons[sender.tag].backgroundColor {
//            print ("Current Button Color is \(currentButtonColor)")
//            print ("UIColor.gray is \(UIColor.gray)")
            if win == 0 {
                if currentButtonColor == UIColor.gray  {
                    if turn % 2 != 0{
                        AllTicButtons[sender.tag].backgroundColor = UIColor.red
                    }
                    else {
                        AllTicButtons[sender.tag].backgroundColor = UIColor.blue
                    }
                    if turn >= 4 {
//                        print ("Checked for win")
                        let checker = checkWin()
                        if checker == true {
                            if turn % 2 != 0 {
                                WinnerLabel.text = "Congrats, red wins!"
                            }
                            else {
                                WinnerLabel.text = "Congrats, blue wins!"
                            }
                            WinnerLabel.isHidden = false
                            win = 1
                        }
                    }
                    turn += 1
                    if turn == 9 && win == 0{
                        WinnerLabel.text = "You both should really rethink your lives if you can't win a simple game of tic-tac-toe...  Anyways, please play again! :)"
                        WinnerLabel.isHidden = false
                        win = 1
                    }
                }
            }
        }
    }
}

