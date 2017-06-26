//
//  ViewController.swift
//  Calculator
//
//  Created by Joseph Zoland on 6/20/17.
//  Copyright © 2017 Joseph Zoland. All rights reserved.
//

import UIKit

class ViewController: UIViewController {
    
    @IBOutlet weak var outputScreen: UILabel!
    
    @IBOutlet weak var CButton: UIButton!
    @IBOutlet weak var minusPlusButton: UIButton!
    @IBOutlet weak var percentageButton: UIButton!
    @IBOutlet weak var divideButton: UIButton!
    @IBOutlet weak var multiplyButton: UIButton! 
    @IBOutlet weak var subtractButton: UIButton!
    @IBOutlet weak var addButton: UIButton!
    @IBOutlet weak var equalsButton: UIButton!
    
    @IBOutlet weak var sevenButton: UIButton!
    @IBOutlet weak var eightButton: UIButton!
    @IBOutlet weak var nineButton: UIButton!
    @IBOutlet weak var fourButton: UIButton!
    @IBOutlet weak var fiveButton: UIButton!
    @IBOutlet weak var sixButton: UIButton!
    @IBOutlet weak var oneButton: UIButton!
    @IBOutlet weak var twoButton: UIButton!
    @IBOutlet weak var threeButton: UIButton!
    @IBOutlet weak var zeroButton: UIButton!
    @IBOutlet weak var dotButton: UIButton!
    
    
    @IBAction func CButtonPressed(_ sender: UIButton) {
        outputScreen.text = ""
    }
    @IBAction func minusPlusButtonPressed(_ sender: UIButton) {
    }
    @IBAction func percentageButtonPressed(_ sender: UIButton) {
    }
    @IBAction func divideButtonPressed(_ sender: UIButton) {
    }
    @IBAction func multiplyButtonPressed(_ sender: UIButton) {
    }
    @IBAction func subtractButtonPressed(_ sender: UIButton) {
    }
    @IBAction func addButtonPressed(_ sender: UIButton) {
    }
    @IBAction func equalsButtonPressed(_ sender: UIButton) {
    }
    
    
    @IBAction func sevenButtonPressed(_ sender: UIButton) {
        outputScreen.text = outputScreen.text! + String(7)
    }
    @IBAction func eightButtonPressed(_ sender: UIButton) {
        outputScreen.text = outputScreen.text! + String(8)
    }
    @IBAction func nineButtonPressed(_ sender: UIButton) {
        outputScreen.text = outputScreen.text! + String(9)
    }
    @IBAction func fourButtonPressed(_ sender: UIButton) {
        outputScreen.text = outputScreen.text! + String(4)
    }
    @IBAction func fiveButtonPressed(_ sender: UIButton) {
        outputScreen.text = outputScreen.text! + String(5)
    }
    @IBAction func sixButtonPressed(_ sender: UIButton) {
        outputScreen.text = outputScreen.text! + String(6)
    }
    @IBAction func oneButtonPressed(_ sender: UIButton) {
        outputScreen.text = outputScreen.text! + String(1)
    }
    @IBAction func twoButtonPressed(_ sender: UIButton) {
        outputScreen.text = outputScreen.text! + String(2)
    }
    @IBAction func threeButtonPressed(_ sender: UIButton) {
        outputScreen.text = outputScreen.text! + String(3)
    }
    @IBAction func zeroButtonPressed(_ sender: UIButton) {
        if (outputScreen.text != "0"){
            outputScreen.text = outputScreen.text! + String(0)
        }
    }
    @IBAction func dotButtonPressed(_ sender: UIButton) {
        if outputScreen.text?.range(of: ".") == nil {
            outputScreen.text = outputScreen.text! + String(".")!
        }
    }
    
    
    
    
    
    
    
    override func viewDidLoad() {
        outputScreen.text = ""
        super.viewDidLoad()
        // Do any additional setup after loading the view, typically from a nib.
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }


}

