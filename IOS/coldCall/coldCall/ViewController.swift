//
//  ViewController.swift
//  coldCall
//
//  Created by Joseph Zoland on 3/8/17.
//  Copyright © 2017 Joseph Zoland. All rights reserved.
//

import UIKit

class ViewController: UIViewController {

    @IBOutlet weak var NameLabel: UILabel!
    @IBOutlet weak var ColdCallPressed: UIButton!
    @IBOutlet weak var ColoredNumber: UILabel!
    
    let namearr = ["Sam", "Amy", "Christene", "Victor", "John", "Olivia", "Dalia", "Arnold", "Ash", "Gary", "Justin", "Jackie", "Patrick"]

    override func viewDidLoad() {
        super.viewDidLoad()
        NameLabel.font = NameLabel.font.withSize(50)
        NameLabel.text = "Ready?"
        
        ColoredNumber.font = ColoredNumber.font.withSize(150)
        ColoredNumber.text = ""
        
        ColdCallPressed.backgroundColor = UIColor.green
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }

    @IBAction func ColdCallButton(_ sender: UIButton) {
        let currentindex = arc4random_uniform(UInt32(namearr.count))
        let currentname = namearr[Int(currentindex)]
        NameLabel.text = currentname
        getNumber()
    }
    
    func getNumber() {
        let randomnumber = arc4random_uniform(UInt32(5))
        let randomint = Int(randomnumber) + 1
        ColoredNumber.text = String(randomint)
        
        if randomint == 1 || randomint == 2 {
            ColoredNumber.textColor = UIColor.red
        }
        else if randomint == 3 || randomint == 4 {
            ColoredNumber.textColor = UIColor.orange
        }
        else {
            ColoredNumber.textColor = UIColor.green
        }
    }
}

