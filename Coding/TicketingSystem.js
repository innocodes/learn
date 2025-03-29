// Ticketing Queue System for a Theme Park Ride.

/**
 * Requirements:
 * 1. Handle VIP tickets
 * 2. Handle Regular tickets
 * 3. Each ticket to have a unique ID and a type (VIP/Regular)
 * 4. Add New Ticket Feature
 * 5. Process Added Tickets in the Correct Order
 * 6. Prioritize VIP tickets over Regular tickets
 * 7. Process Tickets using FIFO
 * 8. Overall Efficient System
 */

class TicketQueue {
    constructor () {
        this.vipTickets = [];
        this.regularTickets = [];
    }

    addTicket (id, type) {
        if (type === 'Regular') {
            this.regularTickets.push(id);
        } else if (type === 'VIP') {
            this.vipTickets.push(id);
        } else {
            console.log('Invalid type provided.')
        }
    }

    processTicket () {
        if (this.vipTickets.length > 0) {
            console.log(this.vipTickets.length);
            const value = this.vipTickets.shift();
            console.log('value', value);
            return value;
        } else if (this.regularTickets.length > 0) {
            console.log(this.regularTickets.length);
            // console.log(this.regularTickets.shift());
            const value = this.regularTickets.shift();
            console.log('value', value);
            return value;
        }
    }
}

// Example Usage

const queue = new TicketQueue();
queue.addTicket(101, 'Regular');
queue.addTicket(102, 'VIP');
queue.addTicket(103, 'Regular');
queue.addTicket(104, 'VIP');
queue.addTicket(105, 'Regular');
queue.addTicket(106, 'VIP');
queue.processTicket();
queue.processTicket();
queue.processTicket();
queue.processTicket();
queue.processTicket();
queue.processTicket();






