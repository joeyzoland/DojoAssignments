//
//  ViewController.swift
//  NinjaGold
//
//  Created by Joseph Zoland on 3/8/17.
//  Copyright © 2017 Joseph Zoland. All rights reserved.
//

import UIKit

class ViewController: UIViewController {
    
    @IBOutlet weak var ScoreLabel: UILabel!
    @IBOutlet weak var FarmLabel: UILabel!
    @IBOutlet weak var CaveLabel: UILabel!
    @IBOutlet weak var HouseLabel: UILabel!
    @IBOutlet weak var CasinoLabel: UILabel!
    
    var score = 0
    
    func RandGenWithLow(l: Int, high h: Int) -> Int{
        let RandInt = arc4random_uniform(UInt32(h - l + 1))
        return Int(RandInt) + l
    }
    
    func hideAll() {
        let buttonLabelArray: [UILabel] = [FarmLabel, CaveLabel, HouseLabel, CasinoLabel]
        for i in buttonLabelArray {
            i.isHidden = true
        }
    }
    

    override func viewDidLoad(){
        super.viewDidLoad()
        // Do any additional setup after loading the view, typically from a nib.
        hideAll()
        ScoreLabel.text = ("Score: \(score)")
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }
    
    @IBAction func ResetButtonPressed(_ sender: UIButton) {
        hideAll()
        score = 0
        ScoreLabel.text = ("Score: \(score)")
    }
    
    @IBAction func PressGoldButton(_ sender: UIButton) {
        var gold = Int()
        hideAll()
        if sender.tag == 1 {
            gold = RandGenWithLow(l: 10, high: 20)
            FarmLabel.text = "You earned \(gold) gold"
            FarmLabel.isHidden = false
        }
        else if sender.tag == 2 {
            gold = RandGenWithLow(l: 5, high: 10)
            CaveLabel.text = "You earned \(gold) gold"
            CaveLabel.isHidden = false
        }
        else if sender.tag == 3 {
            gold = RandGenWithLow(l: 2, high: 5)
            HouseLabel.text = "You earned \(gold) gold"
            HouseLabel.isHidden = false
        }
        else {
            gold = RandGenWithLow(l: -50, high: 50)
            if gold >= 0 {
                CasinoLabel.text = "You earned \(gold) gold"
            }
            if gold < 0 {
                CasinoLabel.text = "You lost \(gold) gold"
            }
            CasinoLabel.isHidden = false
        }
        score += gold
        ScoreLabel.text = ("Score: \(score)")
    }


}

