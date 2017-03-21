//
//  ViewController.swift
//  MadLibs
//
//  Created by Joseph Zoland on 3/20/17.
//  Copyright © 2017 Joseph Zoland. All rights reserved.
//

import UIKit

class IntroViewController: UIViewController, saveButtonViewControllerDelegate {

    @IBOutlet weak var sentence: UILabel!
    
    @IBAction func myUnwindAction(unwindSegue: UIStoryboardSegue) {
        //Put this code in controller you want to unwind to (i.e., the one early in the chain)
        //Afterwards, in controller you want to unwind from, ctrl-drag your button to "exit" button at top of controller
    }
    
    override func prepare(for segue: UIStoryboardSegue, sender: Any?) {
        let navigationController = segue.destination as! UINavigationController
        let InputViewController = navigationController.topViewController as! InputViewController
        InputViewController.delegate = self
    }
    
    func saveButtonPressed(by controller: UIViewController, with array: [String]) {
//        print ("got to saveButtonPressed2")
        sentence.text = "We are having a perfectly \(array[0]) time now. Later we will \(array[1]) and \(array[2]) in the \(array[3])."
    }
    
    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view, typically from a nib.
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }


}

