const navLinks = document.querySelectorAll('.navbar a');
const contentPanel = document.getElementById('content-panel');

const content = {
    home: `
        <h1>Welcome to My Website</h1>
        <p>This is the home page content.</p>
		<p>Lorem ipsum or something</p>
    `,
    about: `
        <h1>About Me</h1>
        <p>Here is some information about me.</p>
    `,
    portfolio: `
        <h1>My Portfolio</h1>
        <p>Here are some of the projects I've worked on.</p>
		<div class="image-gallery">
			<a href="images/Anim_1.0083.png" data-lightbox="PigCube" data-title="PigCube">
				<img src="images/Anim_1.0083.png" alt="PigCube Anim">
			</a>
			<a href="images/Full_1.0089.png" data-lightbox="PigCube" data-title="PigCube">
				<img src="images/Full_1.0089.png" alt="PigCube Full">
			</a>
			<a href="images/turnTable_1.0061.png" data-lightbox="PigCube" data-title="PigCube">
				<img src="images/turnTable_1.0061.png" alt="PigCube turnTable">
			</a>
			<a href="images/CamTable_1.0001.png" data-lightbox="PRoom" data-title="PRoom">
				<img src="images/CamTable_1.0001.png" alt="PRoom">
			</a>
			<a href="images/SciFiRoom_1.0001.png" data-lightbox="SFRoom" data-title="SFRoom">
				<img src="images/SciFiRoom_1.0001.png" alt="SFRoom">
			</a>
			<a href="images/Primitive Explosion_1.0152.png" data-lightbox="Explosion" data-title="Explosion">
				<img src="images/Primitive Explosion_1.0152.png" alt="Explosion Owl">
			</a>
			<a href="images/Primitive Explosion_1.0320.png" data-lightbox="Explosion" data-title="Explosion">
				<img src="images/Primitive Explosion_1.0320.png" alt="Explosion Castle">
			</a>
		</div>
    `,
	commission: `
		<h1>Commission Info</h1>
		<p>File format. Payment methods. Required information.</p>
		<h1>Commission Flow</h1>
		<p>Once I receive your form I will review it and...<p>
		<h1>General Prices</h1>
		<p>Base model $1500 includes...</p>
		<h1>Additional outfits, props, or accessories</h1>
		<p>Price and information</p>
		<h1>Anything else</h1>
		<p>Trying to be thorough</p>
	`,
    contact: `
        <h1>Contact Me</h1>
        <p>Feel free to reach out through the form below.</p>
		<iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfbPA4rXWDhn8WC0FNK2PKgo7XWTMIupodT29nA7Ohh045Geg/viewform?embedded=true" width="100%" height="100%" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
    `,
    tos: `
        <h1>Terms Of Service</h1>
        <p><p><span style="font-size:11pt;font-family:Exo,sans-serif;">Before starting a project, we need to make sure we are on the same page so there aren&apos;t misunderstandings and to protect against fraud, so please take some time to read through these terms! Thank you.</span></p>
<p><br></p>
<p><span style="font-size:11pt;font-family:Exo,sans-serif;">This Terms of Service Agreement (&quot;Agreement&quot;) is entered into between the Artist and the Client for the commission of an artwork (&quot;Work&quot;). By commissioning the Artist, the Client agrees to the following terms:</span></p>
<p><br></p>
<ol>
    <li style="list-style-type:decimal;font-size:11pt;font-family:Exo,sans-serif;">
        <p><strong><span style="font-size:11pt;font-family:Exo,sans-serif;">ENGAGEMENT</span></strong></p>
        <ol>
            <li style="list-style-type:lower-alpha;font-size:11pt;font-family:Exo,sans-serif;">
                <p><span style="font-size:11pt;font-family:Exo,sans-serif;">Client provides clear and complete requirements and expectations upfront, including reference materials or assets before Work begins.</span></p>
            </li>
            <li style="list-style-type:lower-alpha;font-size:11pt;font-family:Exo,sans-serif;">
                <p><span style="font-size:11pt;font-family:Exo,sans-serif;">Client grants to the Artist non-exclusive rights to observe and replicate Client&rsquo;s own character design, reference material and other intellectual property for the use of the Work.</span></p>
            </li>
            <li style="list-style-type:lower-alpha;font-size:11pt;font-family:Exo,sans-serif;">
                <p><span style="font-size:11pt;font-family:Exo,sans-serif;">Client warrants that the character design, reference material and other intellectual property provided to the Artist are legally obtained and authorised for use by the Client.</span></p>
            </li>
            <li style="list-style-type:lower-alpha;font-size:11pt;font-family:Exo,sans-serif;">
                <p><span style="font-size:11pt;font-family:Exo,sans-serif;">Client warrants that they have the authority to enter this agreement, be the point of contact and is solely responsible for decisions and approval during the process.</span></p>
            </li>
            <li style="list-style-type:lower-alpha;font-size:11pt;font-family:Exo,sans-serif;">
                <p><span style="font-size:11pt;font-family:Exo,sans-serif;">Artist strives to perform to the best of their ability in good faith and warrants Work is 100% original according to Artist&rsquo;s best knowledge.</span></p>
            </li>
            <li style="list-style-type:lower-alpha;font-size:11pt;font-family:Exo,sans-serif;">
                <p><span style="font-size:11pt;font-family:Exo,sans-serif;">Artist may use commercially licensed, copyright-free and/or educational materials, assets and/or tools.</span></p>
            </li>
            <li style="list-style-type:lower-alpha;font-size:11pt;font-family:Exo,sans-serif;">
                <p><span style="font-size:11pt;font-family:Exo,sans-serif;">Artist warrants that they will not copy or heavily reference unauthorised materials.</span></p>
            </li>
            <li style="list-style-type:lower-alpha;font-size:11pt;font-family:Exo,sans-serif;">
                <p><span style="font-size:11pt;font-family:Exo,sans-serif;">Artist reserves the right to refuse projects or requests based on content, subject, or other reasons.</span></p>
            </li>
            <li style="list-style-type:lower-alpha;font-size:11pt;font-family:Exo,sans-serif;">
                <p><span style="font-size:11pt;font-family:Exo,sans-serif;">Artist defines scope of work, features, price, deliverables and other details for the project in a proposal in a format according to Artist discretion which may include private message through Discord or Twitter, VGen &nbsp;platform, Google document, or email. The details set forth by the Artist shall be agreed upon by the Client before work begins.</span></p>
            </li>
        </ol>
    </li>
</ol>
<p><br></p>
<ol start="2">
    <li style="list-style-type:decimal;font-size:11pt;font-family:Exo,sans-serif;">
        <p><strong><span style="font-size:11pt;font-family:Exo,sans-serif;">CONTENT RESTRICTIONS</span></strong></p>
        <ol>
            <li style="list-style-type:lower-alpha;font-size:11pt;font-family:Exo,sans-serif;">
                <p><span style="font-size:11pt;font-family:Exo,sans-serif;">Artist will not create content that is explicit, offensive, or inappropriate.</span></p>
            </li>
            <li style="list-style-type:lower-alpha;font-size:11pt;font-family:Exo,sans-serif;">
                <p><span style="font-size:11pt;font-family:Exo,sans-serif;">Specific restrictions include but are not limited to ___________ (i.</span><em><span style="font-size:11pt;font-family:Exo,sans-serif;">e. furries, mechs, explicit adult content, underage characters, excessive muscles, gore, copied styles, and gender identities or cultures the Artist may not be able to portray authenticall</span></em><span style="font-size:11pt;font-family:Exo,sans-serif;">y.)</span></p>
            </li>
        </ol>
    </li>
</ol>
<p><br></p>
<ol start="3">
    <li style="list-style-type:decimal;font-size:11pt;font-family:Exo,sans-serif;">
        <p><strong><span style="font-size:11pt;font-family:Exo,sans-serif;">TIMELINE AND PROCESS</span></strong></p>
        <ol>
            <li style="list-style-type:lower-alpha;font-size:11pt;font-family:Exo,sans-serif;">
                <p><span style="font-size:11pt;font-family:Exo,sans-serif;">Work completion requires ______&nbsp;</span><em><span style="font-size:11pt;font-family:Exo,sans-serif;">(i.e. 2 weeks minimum),</span></em><span style="font-size:11pt;font-family:Exo,sans-serif;">&nbsp;and may take up to _______</span><em><span style="font-size:11pt;font-family:Exo,sans-serif;"> (i.e. 7 months)</span></em><span style="font-size:11pt;font-family:Exo,sans-serif;">&nbsp;depending on each project.</span></p>
            </li>
            <li style="list-style-type:lower-alpha;font-size:11pt;font-family:Exo,sans-serif;">
                <p><span style="font-size:11pt;font-family:Exo,sans-serif;">Timeline depends on commission type, complexity, and workload.</span></p>
            </li>
            <li style="list-style-type:lower-alpha;font-size:11pt;font-family:Exo,sans-serif;">
                <p><span style="font-size:11pt;font-family:Exo,sans-serif;">Client should plan launches and streams accordingly.</span></p>
            </li>
            <li style="list-style-type:lower-alpha;font-size:11pt;font-family:Exo,sans-serif;">
                <p><span style="font-size:11pt;font-family:Exo,sans-serif;">Artist provides progress updates and seeks Client feedback voluntarily.</span></p>
            </li>
            <li style="list-style-type:lower-alpha;font-size:11pt;font-family:Exo,sans-serif;">
                <p><span style="font-size:11pt;font-family:Exo,sans-serif;">Final deliverables are provided by the Artist using the VGen platform, email, Google Drive or similar file transfer tools, in _____ (</span><em><span style="font-size:11pt;font-family:Exo,sans-serif;">PSD, PNG, SVG, AI, etc</span></em><span style="font-size:11pt;font-family:Exo,sans-serif;">) formats as applicable. Any files hosted by the Artist will be available for the Client to download for _____ (</span><em><span style="font-size:11pt;font-family:Exo,sans-serif;">days, weeks, months).</span></em></p>
            </li>
            <li style="list-style-type:lower-alpha;font-size:11pt;font-family:Exo,sans-serif;">
                <p><span style="font-size:11pt;font-family:Exo,sans-serif;">If there are any delays and adjustments to timeline, the Artist will inform the Client.</span></p>
            </li>
            <li style="list-style-type:lower-alpha;font-size:11pt;font-family:Exo,sans-serif;">
                <p><span style="font-size:11pt;font-family:Exo,sans-serif;">Clients must first agree to delays and amendments to timeline exceeding ______&nbsp;</span><em><span style="font-size:11pt;font-family:Exo,sans-serif;">(i.e. 3 months</span></em><span style="font-size:11pt;font-family:Exo,sans-serif;">) through standard communication channels.&nbsp;</span></p>
            </li>
            <li style="list-style-type:lower-alpha;font-size:11pt;font-family:Exo,sans-serif;">
                <p><span style="font-size:11pt;font-family:Exo,sans-serif;">Clients have the right to request refunds ______&nbsp;</span><em><span style="font-size:11pt;font-family:Exo,sans-serif;">(i.e. 3 months</span></em><span style="font-size:11pt;font-family:Exo,sans-serif;">) after deadlines according to 8.c. if Work has not been delivered and there was no agreed upon amendment to the timeline.</span></p>
            </li>
        </ol>
    </li>
</ol>
<p><br></p>
<ol start="4">
    <li style="list-style-type:decimal;font-size:11pt;font-family:Exo,sans-serif;">
        <p><strong><span style="font-size:11pt;font-family:Exo,sans-serif;">REVISIONS</span></strong></p>
        <ol>
            <li style="list-style-type:lower-alpha;font-size:11pt;font-family:Exo,sans-serif;">
                <p><span style="font-size:11pt;font-family:Exo,sans-serif;">One revision is allowed per item shown to the Client during the process.</span></p>
            </li>
            <li style="list-style-type:lower-alpha;font-size:11pt;font-family:Exo,sans-serif;">
                <p><span style="font-size:11pt;font-family:Exo,sans-serif;">(</span><em><span style="font-size:11pt;font-family:Exo,sans-serif;">i.e. After line art, only minor revisions are allowed.)</span></em></p>
            </li>
            <li style="list-style-type:lower-alpha;font-size:11pt;font-family:Exo,sans-serif;">
                <p><span style="font-size:11pt;font-family:Exo,sans-serif;">Additional charges for excessive revisions may be required.</span></p>
            </li>
            <li style="list-style-type:lower-alpha;font-size:11pt;font-family:Exo,sans-serif;">
                <p><span style="font-size:11pt;font-family:Exo,sans-serif;">Revisions may affect progress and timeline.</span></p>
            </li>
            <li style="list-style-type:lower-alpha;font-size:11pt;font-family:Exo,sans-serif;">
                <p><span style="font-size:11pt;font-family:Exo,sans-serif;">Clients may not edit the work after final delivery unless specified in the commission information, project outlines or otherwise approved by the Artist.</span></p>
            </li>
        </ol>
    </li>
</ol>
<p><br></p>
<ol start="5">
    <li style="list-style-type:decimal;font-size:11pt;font-family:Exo,sans-serif;">
        <p><strong><span style="font-size:11pt;font-family:Exo,sans-serif;">COMMUNICATION</span></strong></p>
        <ol>
            <li style="list-style-type:lower-alpha;font-size:11pt;font-family:Exo,sans-serif;">
                <p><span style="font-size:11pt;font-family:Exo,sans-serif;">Ongoing communication and discussion will occur throughout the project, including work in progress, idea generation and collaboration, situational updates, and more.</span></p>
            </li>
            <li style="list-style-type:lower-alpha;font-size:11pt;font-family:Exo,sans-serif;">
                <p><span style="font-size:11pt;font-family:Exo,sans-serif;">Communication channels may include ______ (</span><em><span style="font-size:11pt;font-family:Exo,sans-serif;">i.e. a dedicated commission Discord server, Discord or Twitter private messages, Trello, or others</span></em><span style="font-size:11pt;font-family:Exo,sans-serif;">) according to Artist discretion.</span></p>
            </li>
            <li style="list-style-type:lower-alpha;font-size:11pt;font-family:Exo,sans-serif;">
                <p><span style="font-size:11pt;font-family:Exo,sans-serif;">Artist response time may vary, up to ______</span><em><span style="font-size:11pt;font-family:Exo,sans-serif;"> (i.e. one week</span></em><span style="font-size:11pt;font-family:Exo,sans-serif;">) in order to provide better or more concrete updates.</span></p>
            </li>
            <li style="list-style-type:lower-alpha;font-size:11pt;font-family:Exo,sans-serif;">
                <p><span style="font-size:11pt;font-family:Exo,sans-serif;">The Artist and Client agree to discuss relevant matters concerning the project. Both parties have the right to decline other topics of discussion.</span></p>
            </li>
        </ol>
    </li>
</ol>
<p><br></p>
<ol start="6">
    <li style="list-style-type:decimal;font-size:11pt;font-family:Exo,sans-serif;">
        <p><strong><span style="font-size:11pt;font-family:Exo,sans-serif;">RIGHTS &amp; USAGE</span></strong></p>
        <ol>
            <li style="list-style-type:lower-alpha;font-size:11pt;font-family:Exo,sans-serif;">
                <p><span style="font-size:11pt;font-family:Exo,sans-serif;">Artist General Rights</span></p>
                <ol>
                    <li style="list-style-type:lower-roman;font-size:11pt;font-family:Exo,sans-serif;">
                        <p><span style="font-size:11pt;font-family:Exo,sans-serif;">By default, Artist retains copyright, ownership, redistribution and intellectual property rights, which includes but is not limited to display, advertising, printing, the Work and work in progress on websites, social media, portfolios, public broadcast channels (i.e. Twitch) and more, exempting when some or all of these rights are transferred to the Client under express agreement or project specifications.</span></p>
                    </li>
                    <li style="list-style-type:lower-roman;font-size:11pt;font-family:Exo,sans-serif;">
                        <p><span style="font-size:11pt;font-family:Exo,sans-serif;">The Artist may use rejected work in progress and versions for other projects according to their discretion, under the condition that it does not infringe the Client&apos;s intellectual property rights and ownership of their likeness, character design, branding, identity design or any such trademarks.</span></p>
                    </li>
                    <li style="list-style-type:lower-roman;font-size:11pt;font-family:Exo,sans-serif;">
                        <p><em><span style="font-size:11pt;font-family:Exo,sans-serif;">(Optional)</span></em><span style="font-size:11pt;font-family:Exo,sans-serif;">&nbsp;The Artist retains the non exclusive rights to sell merchandise and prints of their Work, unless exclusive commercial rights are purchased by the Client.</span></p>
                    </li>
                </ol>
            </li>
        </ol>
    </li>
</ol>
<p><br></p>
<ol start="2">
    <li style="list-style-type:lower-alpha;font-size:11pt;font-family:Exo,sans-serif;">
        <p><span style="font-size:11pt;font-family:Exo,sans-serif;">Client Rights for Personal Use Licensed Works</span></p>
        <ol>
            <li style="list-style-type:lower-roman;font-size:11pt;font-family:Exo,sans-serif;">
                <p><span style="font-size:11pt;font-family:Exo,sans-serif;">Clients receive non-transferable usage rights to the Work for personal use. Refer to Section 6.c. for commercial rights.</span></p>
            </li>
            <li style="list-style-type:lower-roman;font-size:11pt;font-family:Exo,sans-serif;">
                <p><span style="font-size:11pt;font-family:Exo,sans-serif;">Personal use means: display on social media accounts for promotional purposes with no direct monetization or sales, such as social media profile pictures, banners, and posts; print and framing in personal spaces; display as part of designs on websites and channels, excluding use in content of these websites or channels; or any other instances where no monetization of, or of content featuring, the Work is involved.</span></p>
            </li>
            <li style="list-style-type:lower-roman;font-size:11pt;font-family:Exo,sans-serif;">
                <p><span style="font-size:11pt;font-family:Exo,sans-serif;">Client must not claim Work as their own and must credit Artist using their social tag/username/link at the instance of display of the Work or permanently on their websites, social media profiles, broadcast channels and so on where possible.</span></p>
            </li>
        </ol>
    </li>
</ol>
<p><br></p>
<ol start="3">
    <li style="list-style-type:lower-alpha;font-size:11pt;font-family:Exo,sans-serif;">
        <p><span style="font-size:11pt;font-family:Exo,sans-serif;">Client Rights for Commercial Use Licensed Works</span></p>
        <ol>
            <li style="list-style-type:lower-roman;font-size:11pt;font-family:Exo,sans-serif;">
                <p><span style="font-size:11pt;font-family:Exo,sans-serif;">Commercial usage rights are not included in general commissions, unless specified in the commission type or project specifications listed on the Artist&rsquo;s websites (i.e. vtuber models, stream overlays, emotes, and so forth), or is purchased by the Client and agreed upon.</span></p>
            </li>
            <li style="list-style-type:lower-roman;font-size:11pt;font-family:Exo,sans-serif;">
                <p><span style="font-size:11pt;font-family:Exo,sans-serif;">Commercial rights may differ for each commission type. Commercial broadcast rights means usage of Work on streams, videos, advertisements and other content, or any similar monetized instances; commercial distribution rights means selling or reselling Work to another party, as a part of any product or merchandising, or on another platform.</span></p>
            </li>
            <li style="list-style-type:lower-roman;font-size:11pt;font-family:Exo,sans-serif;">
                <p><span style="font-size:11pt;font-family:Exo,sans-serif;">In the case of original design work and assets for the purpose and definition of the Client&apos;s brand identity such as character design, logo design, and more, intellectual property rights of the designs and their likeness are exclusively transferred to the Client for use, production and modification purposes, commercial or personal. (</span><em><span style="font-size:11pt;font-family:Exo,sans-serif;">Please clarify in further detail for each type of work if necessary)</span></em></p>
            </li>
            <li style="list-style-type:lower-roman;font-size:11pt;font-family:Exo,sans-serif;">
                <p><span style="font-size:11pt;font-family:Exo,sans-serif;">Usage of Work for AI (artificial intelligence) tools, platforms or programs; ML (machine learning) tools, platforms or programs; AI or ML training; NFT; blockchain; or other for-profit platforms/purposes, is strictly prohibited.</span></p>
            </li>
            <li style="list-style-type:lower-roman;font-size:11pt;font-family:Exo,sans-serif;">
                <p><span style="font-size:11pt;font-family:Exo,sans-serif;">Additional charges will be required for commercial usage if not included in the project type, listing, or specifications, typically 2x of the original cost.</span></p>
            </li>
        </ol>
    </li>
</ol>
<p><br></p>
<ol start="7">
    <li style="list-style-type:decimal;font-size:11pt;font-family:Exo,sans-serif;">
        <p><strong><span style="font-size:11pt;font-family:Exo,sans-serif;">PAYMENTS &amp; FEES</span></strong></p>
        <ol>
            <li style="list-style-type:lower-alpha;font-size:11pt;font-family:Exo,sans-serif;">
                <p><em><span style="font-size:11pt;font-family:Exo,sans-serif;">(optional)</span></em><span style="font-size:11pt;font-family:Exo,sans-serif;">&nbsp;Client pays a (non-refundable) _____ deposit deducted from the project fees for waitlist bookings.</span></p>
            </li>
            <li style="list-style-type:lower-alpha;font-size:11pt;font-family:Exo,sans-serif;">
                <p><span style="font-size:11pt;font-family:Exo,sans-serif;">Client pays _______&nbsp;</span><em><span style="font-size:11pt;font-family:Exo,sans-serif;">(i.e. in full up to $150 value, or pays a 50% downpayment for higher value projects.)</span></em></p>
            </li>
            <li style="list-style-type:lower-alpha;font-size:11pt;font-family:Exo,sans-serif;">
                <p><em><span style="font-size:11pt;font-family:Exo,sans-serif;">(i.e. In the case of projects above $150, the final 50% is due at first complete watermarked or low resolution preview of the final deliverables.)</span></em></p>
            </li>
            <li style="list-style-type:lower-alpha;font-size:11pt;font-family:Exo,sans-serif;">
                <p><span style="font-size:11pt;font-family:Exo,sans-serif;">Invoices, proposal or payment link will be sent to the Client when Artist is ready to begin work. Clients must not send money before these requests for payment from the Artist.</span></p>
            </li>
            <li style="list-style-type:lower-alpha;font-size:11pt;font-family:Exo,sans-serif;">
                <p><span style="font-size:11pt;font-family:Exo,sans-serif;">Invoices must be paid within ____&nbsp;</span><em><span style="font-size:11pt;font-family:Exo,sans-serif;">(i.e. 72 hours</span></em><span style="font-size:11pt;font-family:Exo,sans-serif;">), or the project may be cancelled.</span></p>
            </li>
            <li style="list-style-type:lower-alpha;font-size:11pt;font-family:Exo,sans-serif;">
                <p><span style="font-size:11pt;font-family:Exo,sans-serif;">Prices are in USD, and paid via VGen, Stripe, PayPal, or methods as provided by the Artist.</span></p>
            </li>
            <li style="list-style-type:lower-alpha;font-size:11pt;font-family:Exo,sans-serif;">
                <p><span style="font-size:11pt;font-family:Exo,sans-serif;">Prices may vary or change depending on complexity, requirements and/or additional requests.</span></p>
            </li>
            <li style="list-style-type:lower-alpha;font-size:11pt;font-family:Exo,sans-serif;">
                <p><span style="font-size:11pt;font-family:Exo,sans-serif;">Once Work has begun or payments have been made, the Client acknowledges Work and deliverables are digital and there are no physically shipped goods to receive.</span></p>
            </li>
            <li style="list-style-type:lower-alpha;font-size:11pt;font-family:Exo,sans-serif;">
                <p><span style="font-size:11pt;font-family:Exo,sans-serif;">Client agrees that they will not issue chargebacks and the refund policy mentioned below will be followed.</span></p>
            </li>
        </ol>
    </li>
</ol>
<p><br></p>
<p><br></p>
<ol start="8">
    <li style="list-style-type:decimal;font-size:11pt;font-family:Exo,sans-serif;">
        <p><strong><span style="font-size:11pt;font-family:Exo,sans-serif;">CANCELLATION &amp; REFUNDS</span></strong></p>
        <ol>
            <li style="list-style-type:lower-alpha;font-size:11pt;font-family:Exo,sans-serif;">
                <p><span style="font-size:11pt;font-family:Exo,sans-serif;">If Client requests cancellation, __________&nbsp;</span><em><span style="font-size:11pt;font-family:Exo,sans-serif;">(i.e. 50% of project fees may be forfeit if cancelled within 2 days before work starts. A partial to full refund may be provided if there is more than 2 days&rsquo; notice.)</span></em></p>
            </li>
            <li style="list-style-type:lower-alpha;font-size:11pt;font-family:Exo,sans-serif;">
                <p><span style="font-size:11pt;font-family:Exo,sans-serif;">No refunds are possible after work begins unless initiated by the Artist and except for circumstances due to the Artist as detailed in 8.c. and Section 3.</span></p>
            </li>
            <li style="list-style-type:lower-alpha;font-size:11pt;font-family:Exo,sans-serif;">
                <p><span style="font-size:11pt;font-family:Exo,sans-serif;">If Artist cannot complete work or there are delays as detailed in Section 3 for unforeseen reasons, the Client may be eligible for a full refund. If work done up to this point is accepted and used by the Client, the Artist will provide a partial refund according to the amount of work complete.</span></p>
            </li>
        </ol>
    </li>
</ol>
<p><br></p>
<ol start="9">
    <li style="list-style-type:decimal;font-size:11pt;font-family:Exo,sans-serif;">
        <p><strong><span style="font-size:11pt;font-family:Exo,sans-serif;">CONFIDENTIALITY</span></strong></p>
        <ol>
            <li style="list-style-type:lower-alpha;font-size:11pt;font-family:Exo,sans-serif;">
                <p><span style="font-size:11pt;font-family:Exo,sans-serif;">The Artist and Client acknowledges that information and materials that are provided to either party (including but not limited to personal information, technical information, marketing plans, payment information, or sensitive business information) outside of the development of Work, that will not be visible to the public, shall be considered confidential information and shall not be disclosed to any other party without prior written permission from the owner of this confidential information.</span></p>
            </li>
        </ol>
    </li>
</ol>
<p><br></p>
<ol start="10">
    <li style="list-style-type:decimal;font-size:11pt;font-family:Exo,sans-serif;">
        <p><strong><span style="font-size:11pt;font-family:Exo,sans-serif;">INDEMNIFICATION</span></strong></p>
        <ol>
            <li style="list-style-type:lower-alpha;font-size:11pt;font-family:Exo,sans-serif;">
                <p><span style="font-size:11pt;font-family:Exo,sans-serif;">Client indemnifies Artist against claims, losses, damages, and expenses related to Work usage by the Client, breach by the Client of the Agreement, or third-party claims.</span></p>
            </li>
            <li style="list-style-type:lower-alpha;font-size:11pt;font-family:Exo,sans-serif;">
                <p><span style="font-size:11pt;font-family:Exo,sans-serif;">If Client&apos;s rights and the terms of this agreement are violated or the Work is not delivered as agreed, due to Artist negligence, Artist will work to remedy the situation first according to the terms aforementioned and otherwise to the satisfaction of the Client.</span></p>
            </li>
        </ol>
    </li>
</ol>
<p><br></p>
<ol start="11">
    <li style="list-style-type:decimal;font-size:11pt;font-family:Exo,sans-serif;">
        <p><strong><span style="font-size:11pt;font-family:Exo,sans-serif;">ACCEPTANCE</span></strong></p>
        <ol>
            <li style="list-style-type:lower-alpha;font-size:11pt;font-family:Exo,sans-serif;">
                <p><span style="font-size:11pt;font-family:Exo,sans-serif;">Client is 18+ and legally able to commit to an agreement or has a legal guardian to make this agreement on their behalf.</span></p>
            </li>
            <li style="list-style-type:lower-alpha;font-size:11pt;font-family:Exo,sans-serif;">
                <p><span style="font-size:11pt;font-family:Exo,sans-serif;">Agreement date is upon first inquiry/communication or first transaction.&nbsp;</span><em><span style="font-size:11pt;font-family:Exo,sans-serif;">(or by use a digital signature program for a more legally binding and enforceable agreement if the Artist does choose to)</span></em></p>
            </li>
        </ol>
    </li>
</ol>
<p><br></p>
<p><span style="font-size:11pt;font-family:Exo,sans-serif;">Note: Businesses, agencies, groups and other organizations should contact the Artist to discuss arrangements in more detail.</span></p></p>
    `
};

navLinks.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();

        const target = link.getAttribute('data-target');

        contentPanel.innerHTML = content[target];
    });
});
