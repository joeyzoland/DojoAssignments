//
//  ViewController.swift
//  greatNumberGame
//
//  Created by Joseph Zoland on 6/20/17.
//  Copyright © 2017 Joseph Zoland. All rights reserved.
//

import UIKit

class ViewController: UIViewController {
    
    @IBOutlet weak var guessedNumber: UITextField!
    
    var currentNumber = Int()
    
    @IBAction func submitButtonPressed(_ sender: UIButton) {
        if let unwrappedNumber = Int(guessedNumber.text!) {
            if (Int(guessedNumber.text!)! > currentNumber) {
                let highAlertController = UIAlertController(title: "Incorrect!", message:
                    "\(unwrappedNumber) was too high.", preferredStyle: UIAlertControllerStyle.alert)
                highAlertController.addAction(UIAlertAction(title: "Guess again", style: UIAlertActionStyle.default,handler: nil))
                highAlertController.view.tintColor = UIColor.orange
                highAlertController.view.backgroundColor = UIColor.red
                self.present(highAlertController, animated: true, completion: nil)
            }
            else if (Int(guessedNumber.text!)! < currentNumber) {
                let lowAlertController = UIAlertController(title: "Incorrect!", message:
                    "\(unwrappedNumber) was too low.", preferredStyle: UIAlertControllerStyle.alert)
                lowAlertController.addAction(UIAlertAction(title: "Guess again", style: UIAlertActionStyle.default,handler: nil))
                lowAlertController.view.tintColor = UIColor.orange
                lowAlertController.view.backgroundColor = UIColor.red
                self.present(lowAlertController, animated: true, completion: nil)
            }
            else {
                let correctAlertController = UIAlertController(title: "Correct!", message:
                    "\(unwrappedNumber) is the number!", preferredStyle: UIAlertControllerStyle.alert)
                correctAlertController.addAction(UIAlertAction(title: "Play again", style: UIAlertActionStyle.default,handler: nil))
                correctAlertController.view.backgroundColor = UIColor.green
                self.present(correctAlertController, animated: true, completion: nil)
                generateNumber()
            }
        }
        guessedNumber.text = ""
    }
    
    func generateNumber() {
        currentNumber = Int(arc4random_uniform(101))
    }
    
    override func viewDidLoad() {
        super.viewDidLoad()
        generateNumber()
        // Do any additional setup after loading the view, typically from a nib.
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }


}

