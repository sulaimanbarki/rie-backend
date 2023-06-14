<?php

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class ContactEmail extends Mailable implements ShouldQueue
{
    use Queueable, SerializesModels;


    public $name;
    public $email;
    public $number;
    public $msg;
    
    public function __construct($name, $email, $number, $msg)
    {
        $this->name = $name;
        $this->email = $email;
        $this->number = $number;
        $this->msg = $msg;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->subject('WQsoftwares Contact')->markdown('email.contact');
    }
}
