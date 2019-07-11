import React from 'react';
import { Row, Col } from "react-bootstrap";
import { Helmet } from "react-helmet";
import './home.css';
import { DemoBtn } from '../helpers/demo';

export function Faq(){
  return (
    <div id="page-content" className="faq-page">
      <Helmet>
        <title>Home | SharedSchool</title>
      </Helmet>
      <Row className="justify-content-center">
        <Col xl="6" className="align-md-left">
          <h1 class="blue-header text-center">FAQ</h1>
        	<h4 class="blue-header">
        		Why should I use SharedSchool?
        	</h4>
        	<p class="gray">
        		There are many key advantages to using the SharedSchool platform. If you’re looking to generate revenue off of surplus in your school, clear up space for storage, acquire educational materials at a low cost, or simply help out another school, then SharedSchool is the perfect platform for you.
        	</p>
        	<h4 class="blue-header">
        		How does SharedSchool work?
        	</h4>
        	<p class="gray">
        		SharedSchool uses matching processes to correctly identify and optimize each “wish” a school makes with listed items based on time, availability, price, accuracy and location.
        	</p>
        	<h4 class="blue-header">
        		What is the cost of a SharedSchool account?
        	</h4>
        	<p class="gray">
        		Nothing! SharedSchool is free if you sign-up now.
        	</p>
        	<h4 class="blue-header">
        		Does SharedSchool take a commission from our transactions?
        	</h4>
        	<p class="gray">
        		Nope! SharedSchool takes no commission from the transactions, meaning more profits for your institutions and more money saved.
        	</p>
        	<h4 class="blue-header">
        		How can SharedSchool make and/or save me money?
        	</h4>
        	<p class="gray">
        		Many institutions either have surplus materials that no longer provide them with value or need materials that they may not be able to fully afford. We can generate extra revenue for your school by listing surplus materials onto the SharedSchool platform and connecting them to other schools who need these items. The schools wanting these materials will receive them at a cheaper price while the school selling the item will make extra money of resources that may have otherwise gone to waste.
        	</p>
        	<h4 class="blue-header">
        		Who uses SharedSchool?
        	</h4>
        	<p class="gray">
        		We are primary focusing on educational institutions, namely public and private schools. Teachers and administrators are also a part of the SharedSchool network since they are affiliated with their own institution.
        	</p>
        	<h4 class="blue-header">
        		Why is SharedSchool different from other surplus centers?
        	</h4>
        	<p class="gray">
        		SharedSchool is domain specific to education and we directly connect schools to each other based on your wants and surplus. Because only schools can use SharedSchool, this avoids the bidding process of getting rid of surplus, as found on GovDeals and other centers. Our goal is to ensure surplus is used to its full potential and create a flexible platform for all schools. Additionally, we are working towards social good, aiming to equal the educational playing field and provide institutions with essential materials at a cheaper cost, and enabling others to gain extra revenue in the process.
        	</p>
        	<h4 class="blue-header">
        		What kind of items are SharedSchool eligible?
        	</h4>
        	<p class="gray">
        		Almost anything you can think of. If your institution owns it and has used it as part of their educational curriculum, then chances are another school may need that same material. These items can range anywhere from a piano to binders to bunsen burners to markers. If you don’t know if anyone wants your item, list it anyway and let our platform do the rest.
        	</p>
        	<h4 class="blue-header">
        		What if no one wants the material that I’m listing on SharedSchool?
        	</h4>
        	<p class="gray">
        		We will keep your material listed on the SharedSchool platform until you decide you want to take it off. Requests are dynamic and constantly change, so odds are that eventually you will be able to sell your material.
        	</p>
        	<h4 class="blue-header">
        		What different abilities do administrator and user accounts have?
        	</h4>
        	<p class="gray">
        		An administrator account is an “umbrella” account made so that administrators can have overarching approval abilities over the other users who will have access to that same institution’s account. Administrators handle the transactions (requests/listings) and teachers have the ability to make suggestions whether that be a request for an item or a potential new listing for the school. All accounts have the ability to browse the requests and listings on the platform but the final approval for any action comes from the administrator accounts.
        	</p>
        	<h4 class="blue-header">
        		I’m a teacher and I’m not sure if I completely understand the process of how I can receive and/or list materials. Can you describe this process?
        	</h4>
        	<p class="gray">
        		Once your institution has created their own administrator account, you will be able to create a separate user account under your institution’s account through a verification code. After creating your account, you will be able to suggest “wishes” for items and possible new listings for surplus in your school to be verified by an appropriate administrator. If verified, the request/listing will be added onto the SharedSchool platform and then accordingly matched with another institution.
        	</p>
        	<h4 class="blue-header">
        		Why is it important to become a part of a shared economy?
        	</h4>
        	<p class="gray">
        		Shared economy’s connect buyers and sellers by the means of sharing a good or service. Becoming a part of one makes it easier for you to receive these materials by increasing flexibility and lowering the cost. More members = more surplus + more listing = more transactions = more for everyone!
        	</p>
        </Col>
      </Row>
    </div>
  );
}
