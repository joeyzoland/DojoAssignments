//
//  AddItemTableViewControllerDelegate.swift
//  Bucket List
//
//  Created by Joseph Zoland on 3/15/17.
//  Copyright © 2017 Joseph Zoland. All rights reserved.
//

import Foundation

protocol AddItemTableViewControllerDelegate: class {
    func itemSaved(by controller: AddItemTableViewController, with text: String)
    func cancelButtonPressed(by controller: AddItemTableViewController)
}
