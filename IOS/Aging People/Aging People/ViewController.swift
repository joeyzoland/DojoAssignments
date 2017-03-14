//
//  ViewController.swift
//  Aging People
//
//  Created by Joseph Zoland on 3/14/17.
//  Copyright © 2017 Joseph Zoland. All rights reserved.
//

import UIKit

class ViewController: UIViewController {
    
    @IBOutlet weak var tableView: UITableView!
    
    var nameArray = ["Joey", "John", "Christene", "Josh", "Sam", "Justin", "Patrick", "Jackie", "Jaeson", "Dalia", "Ryan", "Olivia"]

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
        return nameArray.count
    }
    func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        let cell = tableView.dequeueReusableCell(withIdentifier: "MyCell", for: indexPath)
        cell.textLabel?.text = nameArray[indexPath.row]
        cell.detailTextLabel?.text = String(Int(arc4random_uniform(91)) + 5) + " years old"
        return cell
    }
}
