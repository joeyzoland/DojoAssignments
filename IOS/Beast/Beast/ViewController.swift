//
//  ViewController.swift
//  Beast
//
//  Created by Joseph Zoland on 3/14/17.
//  Copyright © 2017 Joseph Zoland. All rights reserved.
//

import UIKit

class ViewController: UIViewController {
    
    var tasks = ["Something cool", "Something dumb", "Something unbelievable"]
    
    @IBOutlet weak var taskTextField: UITextField!
    @IBOutlet weak var tableView: UITableView!
    
    @IBAction func beastButtonPressed(_ sender: UIButton) {
        if let input = taskTextField.text {
            if input != "" {
                tasks.append(input)
                taskTextField.text = ""
                tableView.reloadData()
            }
        }
    }
    

    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view, typically from a nib.
        tableView.dataSource = self
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }


}

extension ViewController: UITableViewDataSource {
    
    func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        return tasks.count
    }
    
    func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        
        let cell = tableView.dequeueReusableCell(withIdentifier: "MyCell", for: indexPath)
        cell.textLabel?.text = tasks[indexPath.row]
        return cell
    }
}

