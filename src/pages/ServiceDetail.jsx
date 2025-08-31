import { useParams } from "react-router-dom";
import { services } from "../data/ServicesData";

export default function ServiceDetail() {
  const { id } = useParams();
  const service = services.find((s) => s.id === parseInt(id));

  if (!service) return <h1 className="text-center mt-10">Service Not Found</h1>;

  return (
    <div className="w-full">
      <img
        src={service.imageUrl}
        alt={service.heading}
        className="w-full h-[500px] object-cover shadow-lg"
      />
      {/* Content */}
      <div className="px-6 max-w-6xl mb-16 mx-auto">
        <h1 data-aos="fade-up" className="text-6xl font-bold mt-6 text-center text-gray-600">
          {service.heading}
        </h1>
        {/* Extra content for "24/7 Guest Communication" */}
        {service.heading === "24/7 Guest Communication" && (
          <div data-aos="fade-up" className="mt-10 text-gray-700 space-y-4">
            <p>
              Hospitality never sleeps and neither do we when it comes to caring
              for your guests. Our dedicated support team is available 24 hours
              a day, 7 days a week to handle all guest inquiries, from the
              moment they book until after they check out.
            </p>
            <p>
              Whether it’s a late-night question about check-in, a special
              request during their stay, or post-stay follow-ups, we make sure
              every guest feels heard, valued, and cared for.
            </p>

            <h2 className="text-2xl font-semibold mt-6">What We Offer:</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <strong>Instant Responses</strong> – Quick replies that keep
                guests satisfied and engaged.
              </li>
              <li>
                <strong>Multi-Channel Support</strong> – We communicate through
                Airbnb, Booking.com, VRBO, and other OTA platforms directly.
              </li>
              <li>
                <strong>Problem-Solving On the Spot</strong> – From
                troubleshooting to coordinating solutions, we handle it all
                without delay.
              </li>
              <li>
                <strong>Personalized Communication</strong> – Friendly,
                professional, and tailored to each guest.
              </li>
            </ul>

            <p className="mt-4">
              With us managing your guest communications, you can rest easy
              knowing your property is represented with excellence around the
              clock.
            </p>
          </div>
        )}

        {/* Extra content for "Revenue Management" */}
        {service.heading === "Revenue Management" && (
          <div data-aos="fade-up" className="mt-10 text-gray-700 space-y-4">
            <p>
              Maximize your earnings without lifting a finger. At Trinity Asset
              Care, we use a data-driven approach to set the right price at the
              right time ensuring your property stays competitive while
              generating the highest possible revenue.
            </p>
            <p>
              We don’t just “set and forget” pricing. Our team continuously
              monitors market trends, competitor rates, demand patterns, and
              seasonality to adjust your nightly rates in real time. The result?
              Higher occupancy, optimized revenue, and more money in your
              pocket.
            </p>

            <h2 className="text-2xl font-semibold mt-6">What We Do:</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <strong>Dynamic Pricing Strategies</strong> – Nightly rates are
                adjusted based on demand, events, seasonality, and competitor
                activity.
              </li>
              <li>
                <strong>Market Trend Analysis</strong> – Stay ahead of the curve
                with real-time insights into local and global market conditions.
              </li>
              <li>
                <strong>Occupancy Optimization</strong> – Balance high booking
                rates with maximum profitability.
              </li>
              <li>
                <strong>OTA Performance Monitoring</strong> – Ensure your
                listings perform well across Airbnb, Booking.com, VRBO, and
                more.
              </li>
              <li>
                <strong>Revenue Reports</strong> – Transparent monthly reports
                so you always know how your property is performing.
              </li>
            </ul>

            <p className="mt-4">
              With our revenue management expertise, your property doesn’t just
              get bookings, it gets the best bookings at the best rates.
            </p>
          </div>
        )}

        {/* Extra content for "End-to-End Management" */}
        {service.heading === "End-to-End Management" && (
          <div data-aos="fade-up" className="mt-10 text-gray-700 space-y-4">
            <p>
              Sit back, relax, and let us handle everything. With our
              comprehensive property management service, we take care of every
              detail of your short-term rental from listing setup to guest
              check-out so you can enjoy true peace of mind and steady income.
            </p>
            <p>
              Our team combines technology, hospitality expertise, and local
              market insights to ensure your property runs smoothly and
              profitably without you lifting a finger.
            </p>

            <h2 className="text-2xl font-semibold mt-6">What’s Included:</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <strong>Listing Creation & Optimization</strong> – Professional
                photos, compelling descriptions, and keyword-rich content that
                attract more bookings.
              </li>
              <li>
                <strong>24/7 Guest Communications</strong> – Fast, friendly
                responses around the clock to keep guests satisfied.
              </li>
              <li>
                <strong>Revenue Management</strong> – Dynamic pricing strategies
                that maximize your earnings year-round.
              </li>
              <li>
                <strong>Housekeeping & Maintenance Coordination</strong> –
                Reliable cleaning and upkeep so your property always shines.
              </li>
              <li>
                <strong>Guest Screening & Reviews</strong> – Ensuring quality
                guests and helping you build a 5-star reputation.
              </li>
              <li>
                <strong>Performance Reporting</strong> – Clear monthly insights
                into your property’s success.
              </li>
            </ul>

            <p className="mt-4">
              With our end-to-end management, hosting becomes completely
              hands-off while your property reaches its full potential.
            </p>
          </div>
        )}

        {/* Extra content for "Multi-Platform Support" */}
        {service.heading === "Multi-Platform Support" && (
          <div data-aos="fade-up" className="mt-10 text-gray-700 space-y-4">
            <p>
              Why limit your property to just one platform when it can shine across many?
              At Trinity Asset Care, we make sure your listings perform seamlessly on all
              major OTAs (Online Travel Agencies) and PMSs (Property Management Systems)
              so you never miss a booking opportunity.
            </p>
            <p>
              From Airbnb and Booking.com to VRBO and beyond, we manage your property
              across multiple platforms, ensuring consistent branding, accurate
              information, and synchronized calendars.
            </p>

            <h2 className="text-2xl font-semibold mt-6">What We Offer:</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <strong>OTA Expertise</strong> – Airbnb, Booking.com, VRBO, and more.
              </li>
              <li>
                <strong>PMS Integration</strong> – Hospitable, Hostaway, Guesty,
                OwnerRez, Hostfully, and other leading systems.
              </li>
              <li>
                <strong>Calendar Synchronization</strong> – No double bookings, no
                missed opportunities.
              </li>
              <li>
                <strong>Listing Optimization Everywhere</strong> – Professionally
                crafted content that ranks high and converts browsers into bookers.
              </li>
              <li>
                <strong>Centralized Communication</strong> – Guest messages consolidated
                across platforms for smooth, timely responses.
              </li>
            </ul>

            <p className="mt-4">
              With our multi-platform support, your property gets maximum visibility,
              higher occupancy, and a bigger revenue stream without the hassle of
              managing it all yourself.
            </p>
          </div>
        )}

        {/* Extra content for "Listing Optimization" */}
        {service.heading === "Listing Optimization" && (
          <div data-aos="fade-up" className="mt-10 text-gray-700 space-y-4">
            <p>
              Your property deserves to stand out and that starts with a powerful,
              eye-catching listing. At Trinity Asset Care, we specialize in crafting
              listings that don’t just look good, but also rank higher, attract clicks,
              and convert views into bookings.
            </p>
            <p>
              We combine professional presentation with data-backed strategies to make
              sure your property grabs attention on platforms like Airbnb, Booking.com,
              and VRBO.
            </p>

            <h2 className="text-2xl font-semibold mt-6">What We Do:</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <strong>Professional Photos & Staging Guidance</strong> – Showcase your
                property in the best light.
              </li>
              <li>
                <strong>Compelling Descriptions</strong> – Highlight unique features and
                tell a story that resonates with travelers.
              </li>
              <li>
                <strong>Keyword Optimization</strong> – Smart use of search terms so
                your listing ranks higher in OTA searches.
              </li>
              <li>
                <strong>Headline Crafting</strong> – Short, powerful titles that
                instantly attract clicks.
              </li>
              <li>
                <strong>Amenities Highlighting</strong> – Make sure guests see
                everything that makes your property special.
              </li>
              <li>
                <strong>Ongoing Performance Tweaks</strong> – Regular updates to keep
                your listing fresh and competitive.
              </li>
            </ul>

            <p className="mt-4">
              With the right optimization, your property doesn’t just appear online, it
              shines above the competition and drives more bookings.
            </p>
          </div>
        )}

        {/* Extra content for "Marketing" */}
        {service.heading === "Marketing" && (
          <div data-aos="fade-up" className="mt-10 text-gray-700 space-y-4">
            <p>
              A great property deserves great visibility. At Trinity Asset Care, we don’t
              just manage your rental, we actively market it to the right audience so it
              stands out in a crowded marketplace. Our tailored marketing strategies
              ensure that your property reaches more travelers, converts more bookings,
              and builds a strong online presence.
            </p>
            <p>
              We combine data-driven insights, creative branding, and platform expertise
              to showcase your property across multiple channels.
            </p>

            <h2 className="text-2xl font-semibold mt-6">What We Do:</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <strong>Professional Branding</strong> – Consistent, attractive branding
                that makes your property memorable.
              </li>
              <li>
                <strong>High-Impact Visuals</strong> – Stunning photography, video tours,
                and design elements that capture attention.
              </li>
              <li>
                <strong>Targeted Digital Campaigns</strong> – Drive more traffic with
                social media, Google visibility, and retargeting ads.
              </li>
              <li>
                <strong>Platform Optimization</strong> – Maximize performance on Airbnb,
                Booking.com, VRBO, and other OTAs.
              </li>
              <li>
                <strong>Social Media Presence</strong> – Build credibility and attract
                repeat guests through engaging posts and updates.
              </li>
              <li>
                <strong>Reputation Management</strong> – Collect and highlight glowing
                reviews to boost trust and bookings.
              </li>
            </ul>

            <p className="mt-4">
              With our marketing expertise, your property isn’t just listed, it’s
              strategically promoted to generate more demand, higher occupancy, and
              maximum revenue.
            </p>
          </div>
        )}


      </div>
      {/* Content */}
      
    </div>
  );
}