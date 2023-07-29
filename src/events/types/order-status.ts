export enum OrderStatus {
    // When the order is created, but the ticket has not yet been reserved.
    Created = 'created',

    // When the ticket has already been reserved by another order, or the user cancels the order.
    // Or the order expires before payment.
    Cancelled = 'cancelled',

    // Order has successfully reserved the ticket.
    AwaitingPayment = 'awaiting:payment',

    // Order has reserved the ticket and the payment was successful.
    Complete = 'complete',
}
