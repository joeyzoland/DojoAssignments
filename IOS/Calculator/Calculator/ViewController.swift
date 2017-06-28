//
//  ViewController.swift
//  Calculator
//
//  Created by Joseph Zoland on 6/20/17.
//  Copyright © 2017 Joseph Zoland. All rights reserved.
//

import UIKit

class ViewController: UIViewController {
    
    var operation = "false"
    var operationDict = [1:"divide", 2:"multiply", 3:"subtract", 4:"add"]
    var pastNumber = Double()
    
    @IBOutlet weak var outputScreen: UILabel!
    
    @IBOutlet weak var CButton: UIButton!
    @IBOutlet weak var minusPlusButton: UIButton!
    @IBOutlet weak var percentageButton: UIButton!
    @IBOutlet weak var divideButton: UIButton!
    @IBOutlet weak var multiplyButton: UIButton!
    @IBOutlet weak var subtractButton: UIButton!
    @IBOutlet weak var addButton: UIButton!
    @IBOutlet weak var equalsButton: UIButton!
    
    @IBOutlet weak var zeroButton: UIButton!
    @IBOutlet weak var dotButton: UIButton!
    
    
    @IBOutlet var allButtons: [UIButton]!
    

    @IBAction func oneToNineButtonsPressed(_ sender: UIButton) {
        if (outputScreen.text == "0"){
            outputScreen.text = String(sender.tag)
        }
        else {
            outputScreen.text = outputScreen.text! + String(sender.tag)
        }
    }
    
    @IBAction func operationButtonPressed(_ sender: UIButton) {
        operation = operationDict[sender.tag]!
        pastNumber = Double(outputScreen.text!)!
        outputScreen.text = "0"
    }
    
    
    @IBAction func CButtonPressed(_ sender: UIButton) {
        operation = "false"
        pastNumber = Double()
        outputScreen.text = "0"
    }
    @IBAction func minusPlusButtonPressed(_ sender: UIButton) {
        if outputScreen.text?.range(of: "-") == nil {
            outputScreen.text = String("-") + outputScreen.text!
        }
        else {
            let index = outputScreen.text?.index((outputScreen.text?.startIndex)!, offsetBy: 1)
            outputScreen.text = outputScreen.text?.substring(from: index!)
        }
    }
    @IBAction func percentageButtonPressed(_ sender: UIButton) {
        let number = Double(outputScreen.text!)!/100
        outputScreen.text = String(number)
    }

    @IBAction func equalsButtonPressed(_ sender: UIButton) {
        if (operation != "false"){
            if (operation == "divide") {
                outputScreen.text = String(pastNumber / Double(outputScreen.text!)!)
            }
            else if (operation == "multiply") {
                outputScreen.text = String(pastNumber * Double(outputScreen.text!)!)
            }
            else if (operation == "subtract") {
                outputScreen.text = String(pastNumber - Double(outputScreen.text!)!)
            }
            else if (operation == "add") {
                outputScreen.text = String(pastNumber + Double(outputScreen.text!)!)
            }
            if (Double(outputScreen.text!)!.truncatingRemainder(dividingBy: 1.0) == 0) {
                let double = Double(outputScreen.text!)
                let int = Int(double!)
                outputScreen.text = String(int)
            }
        }
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
        for i in allButtons {
//            i.layer.cornerRadius = 5
            i.layer.borderWidth = 1
            i.layer.borderColor = UIColor.black.cgColor
        }
        outputScreen.text = "0"
        super.viewDidLoad()
        // Do any additional setup after loading the view, typically from a nib.
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }


}

