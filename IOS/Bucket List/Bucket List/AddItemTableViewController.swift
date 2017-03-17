//
//  AddItemTableViewController.swift
//  Bucket List
//
//  Created by Joseph Zoland on 3/15/17.
//  Copyright © 2017 Joseph Zoland. All rights reserved.
//

import UIKit

class AddItemTableViewController: UIViewController {
    
    weak var delegate: AddItemTableViewControllerDelegate?
    
    var rounds = ""
    var gender = ""
    var single = ""
    var drinks = ""
    
    @IBOutlet weak var message: UILabel!
    @IBOutlet var roundscoll: [UIButton]!
    @IBOutlet var gendercoll: [UIButton]!
    @IBOutlet var singlecoll: [UIButton]!
    @IBOutlet var drinkscoll: [UIButton]!
    

    @IBAction func cancelButtonPressed(_ sender: UIBarButtonItem) {
        delegate?.cancelButtonPressed(by: self)
    }
    
    @IBAction func roundsButtonPressed(_ sender: UIButton) {
        let roundsdict = [0:"0", 1:"1", 2:"2", 3:"3", 4:"all"]
        if let unwrappedrounds = roundsdict[sender.tag] {
            rounds = unwrappedrounds
            for i in roundscoll {
                i.backgroundColor = UIColor.white
            }
        sender.backgroundColor = UIColor.green}
//        print ("\(rounds)")
    }
    
    @IBAction func genderButtonPressed(_ sender: UIButton) {
        let genderdict = [0:"Male", 1:"Female", 2:"Other"]
        if let unwrappedgender = genderdict[sender.tag] {
            gender = unwrappedgender
            for i in gendercoll {
                i.backgroundColor = UIColor.white
            }
            sender.backgroundColor = UIColor.green
        }
//        print ("\(gender)")
    }
    
    
    @IBAction func singleButtonPressed(_ sender: UIButton) {
    let singledict = [0:"Yes", 1:"No"]
    if let unwrappedsingle = singledict[sender.tag] {
        single = unwrappedsingle
        for i in singlecoll {
            i.backgroundColor = UIColor.white
        }
    }
    sender.backgroundColor = UIColor.green
//    print ("\(single)")
    }
    
    @IBAction func drinksButtonPressed(_ sender: UIButton) {
        let drinksdict = [0:"Beer", 1:"Wine", 2:"Liquor"]
        if let unwrappeddrinks = drinksdict[sender.tag] {
            drinks = unwrappeddrinks
            for i in drinkscoll {
                i.backgroundColor = UIColor.white
            }
        sender.backgroundColor = UIColor.green
//        print ("\(drinks)")
        }
    }
    
    
    
    
    @IBAction func saveButtonPressed(_ sender: UIBarButtonItem) {
        if rounds == "" || gender == "" || single == "" || drinks == "" {
            message.isHidden = false
            return
        }
        let string = rounds + " rounds, " + gender + ", single = " + single + ", " + drinks
        delegate?.itemSaved(by: self, with: string)
    }
    
    override func viewDidLoad() {
        super.viewDidLoad()
        message.isHidden = true
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }

}
