//
//  passItemViewControllerDelegate.swift
//  Bucket List
//
//  Created by Joseph Zoland on 3/17/17.
//  Copyright © 2017 Joseph Zoland. All rights reserved.
//

import Foundation

protocol passItemViewControllerDelegate: class {
    func passItem(by controller: BucketListViewController, with text: String)
}
