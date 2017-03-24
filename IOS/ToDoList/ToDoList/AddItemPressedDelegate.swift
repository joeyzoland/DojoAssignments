//
//  AddItemPressedDelegate.swift
//  ToDoList
//
//  Created by Joseph Zoland on 3/23/17.
//  Copyright © 2017 Joseph Zoland. All rights reserved.
//

import Foundation
import UIKit

protocol AddItemPressedDelegate: class {
    func dismissView (by controller: UIViewController)
    func passToView (by controller: UIViewController, with name: String, with body: String, with date: Date)
}
