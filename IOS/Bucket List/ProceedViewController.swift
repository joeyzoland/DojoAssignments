//
//  ProceedViewController.swift
//  Bucket List
//
//  Created by Joseph Zoland on 3/17/17.
//  Copyright © 2017 Joseph Zoland. All rights reserved.
//

import Foundation
import UIKit

class ProceedViewController: UIViewController {
    
    weak var delegate: passItemViewControllerDelegate?
    weak var delegate2: CancelButtonDelegate?
    
    var item = String()
    
    @IBOutlet weak var itemLabel: UILabel!
    
    @IBAction func cancelButtonPressed(_ sender: UIBarButtonItem) {
        print ("I am the actual controller")
        delegate2?.backButtonPressed(by: self)
    }

    
    
    override func viewDidLoad() {
        super.viewDidLoad()
        itemLabel.text = item
        // Do any additional setup after loading the view, typically from a nib.
    }
    
    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }
}
