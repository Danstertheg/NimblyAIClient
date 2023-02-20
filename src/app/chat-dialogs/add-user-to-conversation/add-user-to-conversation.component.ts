import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialogRef } from '@angular/material/dialog';

// Vercel API URL:
const apiURL = "http://localhost:5000"; //"https://finaltest-ten.vercel.app/";

@Component({
  selector: 'app-add-user-to-conversation',
  templateUrl: './add-user-to-conversation.component.html',
  styleUrls: ['./add-user-to-conversation.component.scss', '../create-new-conversation/create-new-conversation.component.scss']
})
export class AddUserToConversationComponent implements OnInit {
  // Passed in from chatlogs that triggered this dialog. Set In constructor
  conversationId: string;

  newUserEmail = "";

  constructor(@Inject(MAT_DIALOG_DATA) public data: string,
    private dialogRef: MatDialogRef<AddUserToConversationComponent>) { 
    this.conversationId = data;
  }

  ngOnInit(): void {
  }

  sendRequestToUser() {
    if (this.newUserEmail !== "") { // UNCOMMENT THIS L8ER PLZ: && this.newUserEmail !== localStorage.getItem("email")) {
      const sessionToken = localStorage.getItem("sessionToken");

      // POST a conversation request for new user
      fetch(apiURL + "/api/conversation-request", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${sessionToken}`
        },
        body: JSON.stringify({
          invitedUserId: this.newUserEmail,
          invitingUserId: localStorage.getItem("email"),
          conversationId: this.conversationId
        })
      })
      .then(response => {
        console.log("Sent request for conversation #" + this.conversationId + ": "+ response);
      })
      .catch(error => {
        console.error(error);
      });

      // Close dialog:
      this.dialogRef.close();
    }
  }

}
