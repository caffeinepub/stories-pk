import Map "mo:core/Map";
import Runtime "mo:core/Runtime";
import Principal "mo:core/Principal";
import Iter "mo:core/Iter";
import Nat "mo:core/Nat";

actor {
  let messages = Map.empty<Principal, Message>();

  type Message = {
    id : Principal;
    name : Text;
    email : Text;
    content : Text;
  };

  public shared ({ caller }) func submitMessage(name : Text, email : Text, message : Text) : async () {
    if (messages.containsKey(caller)) { Runtime.trap("Message already exists.") };
    messages.add(
      caller,
      {
        id = caller;
        name;
        email;
        content = message;
      },
    );
  };

  public query ({ caller }) func getMessage(id : Principal) : async Message {
    switch (messages.get(id)) {
      case (null) { Runtime.trap("Message does not exist") };
      case (?message) { message };
    };
  };

  public query ({ caller }) func getAllMessages() : async [Message] {
    messages.values().toArray();
  };
};
