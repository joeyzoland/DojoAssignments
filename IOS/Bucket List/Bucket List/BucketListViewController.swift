//
//  ViewController.swift
//  Bucket List
//
//  Created by Joseph Zoland on 3/15/17.
//  Copyright © 2017 Joseph Zoland. All rights reserved.
//

import UIKit

class BucketListViewController: UITableViewController, AddItemTableViewControllerDelegate, passItemViewControllerDelegate {
    
    var items = [String()]

    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view, typically from a nib.
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }

    override func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        return items.count
    }
    
    override func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        let cell = tableView.dequeueReusableCell(withIdentifier: "listItemCell", for: indexPath)
        cell.textLabel?.text = items[indexPath.row]
        return cell
    }
    
    override func prepare(for segue: UIStoryboardSegue, sender: Any?) {
        
        if segue.identifier == "addItem" {
            let navigationController = segue.destination as! UINavigationController
            let addItemTableViewController = navigationController.topViewController as! AddItemTableViewController
            addItemTableViewController.delegate = self
        }
        if segue.identifier == "Proceed" {
            print ("reached proceed")
            let navigationController = segue.destination as! UINavigationController
            let ProceedViewController = navigationController.topViewController as! ProceedViewController
            ProceedViewController.delegate = self
            let indexPath = sender as! NSIndexPath
            let item = items[indexPath.row]
            ProceedViewController.item = item
        }
    }
    
    override func tableView(_ tableView: UITableView, didSelectRowAt indexPath: IndexPath) {
        performSegue(withIdentifier: "Proceed", sender: indexPath)
    }
    
    func passItem (by controller: BucketListViewController, with text: String) {
        
    }
    
    func cancelButtonPressed(by controller: AddItemTableViewController) {
        dismiss(animated: true, completion: nil)
    }
    func backButtonPressed(by controller: ProceedViewController) {
        dismiss(animated: true, completion: nil)
    }
    func itemSaved(by controller: AddItemTableViewController, with text: String) {
        items.append(text)
        tableView.reloadData()
        dismiss(animated: true, completion: nil)
    }

}

