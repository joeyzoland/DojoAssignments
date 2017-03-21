//
//  InputViewController.swift
//  MadLibs
//
//  Created by Joseph Zoland on 3/20/17.
//  Copyright © 2017 Joseph Zoland. All rights reserved.
//

import Foundation
import UIKit

class InputViewController: UIViewController {
    
    weak var delegate: saveButtonViewControllerDelegate?
    
    @IBOutlet var textFields: [UITextField]!
    
    @IBAction func saveButtonPressed(_ sender: UIButton) {
//        print ("got to saveButtonPressed1")
        var textArray: [String] = []
        for i in textFields {
            textArray.append(i.text!)
        }
        delegate?.saveButtonPressed(by: self, with: textArray)
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
