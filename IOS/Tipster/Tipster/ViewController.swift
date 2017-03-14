//
//  ViewController.swift
//  Tipster
//
//  Created by Joseph Zoland on 3/13/17.
//  Copyright © 2017 Joseph Zoland. All rights reserved.
//

import UIKit



class ViewController: UIViewController {
    
    @IBOutlet weak var raw_bill: UILabel!
    @IBOutlet var tip_calculators: [UILabel]!
    
    @IBOutlet weak var tipSlider: UISlider!
    @IBOutlet weak var groupSlider: UISlider!
    
    @IBOutlet weak var groupLabel: UILabel!
    
    @IBAction func press_buttons(_ sender: UIButton) {
        if let current = raw_bill.text {
        //Tags are set to the corresponding value for each button for values 0 - 9, so if one of those 10 buttons,
        //we should add it to the current number string (unless current is 0 in which case we should replace)
            if sender.tag <= 9 {
                if current == "0"{
                    raw_bill.text = String(sender.tag)
                }
                else {
                    raw_bill.text = current + String(sender.tag)
                }
            }
            //As long as there isn't already a decimal, we want to add one when it's clicked (i.e., tag = 10)
            else if sender.tag == 10 && current.rangeOfCharacter(from: ["."]) == nil {
                raw_bill.text = current + "."
            }
            //If it's the c button...
            else if sender.tag == 11{
                reset()
                
            //Note: we're just letting the function exit without adding if sender.tag = 10 and a "." is already there
            }
        updateTipLabels()
        }
    }

    @IBAction func tipSliderChanged(_ sender: UISlider) {
        sender.value = round(sender.value)
        updateTipLabels()
    }
    
    @IBAction func groupSliderChanged(_ sender: UISlider) {
        sender.value = round(sender.value)
        groupLabel.text = "Group Size: \(String(Int(sender.value)))"
        updateTipLabels()
    }
    

    func updateTipLabels() {
        if let unwrapped = raw_bill.text {
            let floattext = Float(unwrapped)
            //Forcing unwrapping of floattexts here, since it's already been unwrapped above (not sure why Xcode prompting for this...)
            let firstbound = tipSlider.value
            tip_calculators[0].text = String(Int(firstbound)) + "%"
            let secondbound = tipSlider.value
            tip_calculators[1].text = String(Int(secondbound + 5.0)) + "%"
            let thirdbound = tipSlider.value
            tip_calculators[2].text = String(Int(thirdbound + 10.0)) + "%"
            
            let firstbound2 = floattext! * ((tipSlider.value) / 100.0 / groupSlider.value)
            tip_calculators[3].text = String(format: "%.2f", firstbound2)
            let secondbound2 = floattext! * ((tipSlider.value + 5.0) / 100.0 / groupSlider.value)
            tip_calculators[4].text = String(format: "%.2f", secondbound2)
            let thirdbound2 = floattext! * ((tipSlider.value + 10.0) / 100.0 / groupSlider.value)
            tip_calculators[5].text = String(format: "%.2f", thirdbound2)
            
            let firstbound3 = firstbound2 + (floattext!  / groupSlider.value)
            tip_calculators[6].text = String(format: "%.2f", firstbound3)
            let secondbound3 = secondbound2 + (floattext! / groupSlider.value)
            tip_calculators[7].text = String(format: "%.2f", secondbound3)
            let thirdbound3 = thirdbound2 + (floattext! / groupSlider.value)
            tip_calculators[8].text = String(format: "%.2f", thirdbound3)
        }
    }
    
    func reset() {
        raw_bill.text = "0"
    }

    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view, typically from a nib.
        reset()
        updateTipLabels()
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }


}

