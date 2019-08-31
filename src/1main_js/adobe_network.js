Application Layer -> HTTP [HTTP means HyperText Transfer Protocol]

Trasport layer -> TCP/IP [Transmission Control Protocol/Internet Protocol] Header Footer Trailer

network Layer -> IP

Link Phsysical layer -> Wi-fi eternat.





--------------------------------------------------------------------------------------------------------

The transport layer is responsible for error-free, end-to-end delivery of data from the source host to the destination host. It corresponds to the transport layer of the OSI model.

The functions of the transport layer are:

 It facilitates the communicating hosts to carry on a conversation.
 It provides an interface for the users to the underlying network.
 It can provide for a reliable connection. It can also carry out error checking, flow control, and verification.

The protocols used in this layer are:

Transmission Control Protocol, TCP: It is a reliable connection-oriented protocol that transmits data 
from the source to the destination machine without error. 

A connection is established between the peer entities prior to transmission.
At the sending host, TCP divides an incoming byte stream into segments and assigns a separate sequence number to each segment.
At the receiving host, TCP reorders the segments and sends an acknowledgment to the sender for correct receipt of segments.
TCP also manages flow control so that a fast sender does not overwhelm a slow receiver.

--------------------------------------------------------------------------------------------------------

What's the difference between Unix socket and TCP/IP socket?


A UNIX socket is an inter-process communication mechanism that allows bidirectional data exchange between processes running on the same machine.



TCP/IP, or the Transmission Control Protocol/Internet Protocol,  are a mechanism allowing communication between processes over the network ()
(it is a suite of communication protocols used to interconnect network devices on the internet.)



--------------------------------------------------------------------------------------------------------


network packet


A packet is the unit of data that is routed between an origin and a destination on the Internet 

Structure of packet

Header [
	internet protocall
	size of Header Payload
	source and destination ip address
	16 bit identification number
	96 bits
]

Payload [
	content of data of packet
	896 bits
]

Trailer [
	signature of packet
	Error Checking
	32 bits
]

--------------------------------------------------------------------------------------------------------

 certain variants of TCP, if a transmitted packet is lost, it will be re-sent along with every packet that had been sent after it.

--------------------------------------------------------------------------------------------------------

The number of packets sent in response vary in the size of the objects and in caching parameters. For example, if a file is already in the browser cache,

--------------------------------------------------------------------------------------------------------


--------------------------------------------------------------------------------------------------------
