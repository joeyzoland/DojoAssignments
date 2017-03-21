//
//  SaveButtonDelegate.swift
//  MadLibs
//
//  Created by Joseph Zoland on 3/20/17.
//  Copyright © 2017 Joseph Zoland. All rights reserved.
//

import Foundation
import UIKit

protocol saveButtonViewControllerDelegate: class {
    //This is an example whereby a delegate can be passed a string
    func saveButtonPressed(by controller: UIViewController, with array: [String])
}
