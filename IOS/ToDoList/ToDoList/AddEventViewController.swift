//
//  AddEventViewController.swift
//  ToDoList
//
//  Created by Joseph Zoland on 3/23/17.
//  Copyright © 2017 Joseph Zoland. All rights reserved.
//

import Foundation
import UIKit

class AddEventViewController: UIViewController {
    weak var AddItemPressedDelegate: AddItemPressedDelegate?
    
    @IBOutlet weak var nameLabel: UITextField!
    @IBOutlet weak var descriptionLabel: UITextView!
    @IBOutlet weak var dateLabel: UIDatePicker!
    
    
    @IBAction func addItemButtonPressed(_ sender: Any) {
        print ("nameLabel is \(nameLabel.text)")
        print ("descriptionLabel is \(descriptionLabel.text)")
        
//        let dateFormatter = DateFormatter()
//        dateFormatter.dateFormat = "yyyy"
        
//        AddItemPressedDelegate?.createEvent(name: nameLabel.text, description: descriptionLabel.text, )
        
//        print ("date_text is \(date_text.components(separatedBy: " ")[0])")
        
        AddItemPressedDelegate?.passToView(by: self, with: nameLabel.text!, with: descriptionLabel.text!, with: dateLabel.date)
        AddItemPressedDelegate?.dismissView(by: self)
    }
    
    
}
