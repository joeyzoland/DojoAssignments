//
//  ViewController.swift
//  ToDoList
//
//  Created by Joseph Zoland on 3/21/17.
//  Copyright © 2017 Joseph Zoland. All rights reserved.
//

import Foundation
import UIKit
import CoreData

class DisplayEventsController: UITableViewController, AddItemPressedDelegate {
    
    let managedObjectContext = (UIApplication.shared.delegate as! AppDelegate).persistentContainer.viewContext
    
    var events: [EventItem] = []
    
    func fetchAllItems() {
        
        //Note: With managedObjectContext set up, this will retrieve all items from the database named "BucketListItem"
        
        let request = NSFetchRequest<NSFetchRequestResult>(entityName: "EventItem")
        do {
            let result = try managedObjectContext.fetch(request)
            events = result as! [EventItem]
        } catch {
            print("\(error)")
        }
        
    }
    
    func passToView (by controller: UIViewController, with name: String, with body: String, with date: Date) {
            //create the new object as a BucketListItem (named that way in database)
            let item = NSEntityDescription.insertNewObject(forEntityName: "EventItem", into: managedObjectContext) as! EventItem
            item.name = name
            item.text = body
            item.checked = false
        
            let dbDate = date as NSDate
            print ("date is \(date)")
            item.date = dbDate
        
            events.append(item)
        
            tableView.reloadData()
        
            do {
                try managedObjectContext.save()
            } catch {
                print("\(error)")
            }
    }
    
    override func tableView(_ tableView: UITableView, didSelectRowAt indexPath: IndexPath) {
        let item = events[indexPath.row]
        if item.checked == true {
            item.checked = false
        }
        else {
            item.checked = true
        }
        
        do {
            try managedObjectContext.save()
        } catch {
            print("\(error)")
        }
        
        tableView.reloadData()
    }
    
    func dismissView (by controller: UIViewController) {
        dismiss(animated: true, completion: nil)
    }
    
    override func prepare(for segue: UIStoryboardSegue, sender: Any?) {
        //For the purposes of this example, BucketListTableViewController is the outer/later view, sending the action
        
        let navigationController = segue.destination as! UINavigationController
        let AddEventViewController = navigationController.topViewController as! AddEventViewController
        AddEventViewController.AddItemPressedDelegate = self
    }

    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view, typically from a nib.
        fetchAllItems()
        tableView.reloadData()
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }
    
    override func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        //    return the number of rows you want to iterate through, typically from an array.count (example below)
        return events.count
    }
    override func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        //    typical syntax below:
        let cell = tableView.dequeueReusableCell(withIdentifier: "ToDoCell", for: indexPath) as! ToDoCell
        cell.titleLabel.text = events[indexPath.row].name
        cell.descriptionLabel.text = events[indexPath.row].text
        
//        cell.dateLabel.text = events[indexPath.row].date
        let dateFormatter = DateFormatter()
        dateFormatter.dateFormat = "MM/dd/yyyy"
        if let formattedDate = events[indexPath.row].date {
            let dateDate = formattedDate as Date
            cell.dateLabel.text = dateFormatter.string(from: dateDate)
        }
        if events[indexPath.row].checked == true {
            cell.accessoryType = .checkmark
        }
        else if events[indexPath.row].checked == false {
            cell.accessoryType = .none
        }
        return cell
    }


}

