import React from 'react';
import Image from 'next/image';
import Navigation from '../components/Navigation';

export default function BooksPage() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="bg-[#1e3a8a] shadow-sm relative z-50 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <Image
              src="/assets/images/jacob-logo.png"
              alt="Jacob Morgan"
              width={300}
              height={68}
              priority
              className="h-12 w-auto transform hover:scale-105 transition-transform duration-300"
            />

            <Navigation />
          </div>
        </div>
      </header>

      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="relative h-[600px] overflow-hidden">
          {/* Background Image */}
          <Image
            src="/assets/images/booksBanner.png"
            alt="Jacob Morgan Books"
            fill
            className="object-cover object-top"
            priority
          />

          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-black/20"></div>

          {/* Content */}
          <div className="absolute inset-0 flex items-center">
            <div className="container mx-auto px-4">
              <div className="max-w-2xl ml-auto text-left text-white">
                <h1 className="text-5xl md:text-7xl font-bold mb-4 leading-tight animate-[fadeInUp_1s_ease-out] hover:text-orange-400 transition-colors duration-300">
                  Best-selling<br />books
                </h1>
                <h2 className="text-2xl md:text-3xl font-light animate-[fadeInUp_1.2s_ease-out] opacity-0 [animation-fill-mode:forwards]" style={{animationDelay: '0.3s'}}>
                  by jacob morgan
                </h2>
              </div>
            </div>
          </div>
        </section>

        {/* Leading with Vulnerability */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-start max-w-7xl mx-auto">
              {/* Book Image */}
              <div className="text-center lg:text-left">
                <div className="relative inline-block">
                  <Image
                    src="/assets/images/book-1.png"
                    alt="Leading with Vulnerability"
                    width={350}
                    height={400}
                    className="rounded-2xl transform hover:scale-105 transition-transform duration-500"
                    priority
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 350px"
                  />
                  <div className="absolute -top-4 -right-4 bg-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold">
                    LATEST
                  </div>
                </div>
              </div>

              {/* Book Content */}
              <div className="space-y-6">
                <div>
                  <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                    Leading with Vulnerability
                  </h2>
                  <h3 className="text-xl lg:text-2xl text-orange-600 font-semibold mb-6 leading-relaxed">
                    Unlock Your Greatest Superpower to Transform Yourself, Your Team, and Your Organization
                  </h3>
                </div>

                <div className="prose prose-lg text-gray-700">
                  <p className="text-lg font-semibold text-gray-900 mb-4">
                    While vulnerability cripples some leaders, how are others able to tap into it and use it as a superpower?!
                  </p>
                  <p className="leading-relaxed">
                    Based on 100 CEO interviews & a survey of 14,000 employees, Jacob shares candid stories and never before seen research which shows leaders how to tap into vulnerability the right way to create trust, lead through change, and unlock the potential of those around them. You'll never lead the same way again!
                  </p>
                </div>

                {/* Buy Now Buttons */}
                <div className="pt-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-6 uppercase tracking-wide">Buy Now At</h4>
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                    <a href="https://www.amazon.com/Leading-Vulnerability-Superpower-Transform-Organization/dp/1119895243" target="_blank" rel="noopener noreferrer" className="transform hover:scale-110 transition-transform duration-300">
                      <Image src="/assets/images/amazon-1.png" alt="Buy on Amazon" width={139} height={42} className="w-full h-auto" />
                    </a>
                    <a href="https://www.barnesandnoble.com/w/leading-with-vulnerability-jacob-morgan/1143340483?ean=9781119895244" target="_blank" rel="noopener noreferrer" className="transform hover:scale-110 transition-transform duration-300">
                      <Image src="/assets/images/BnN.png" alt="Buy on Barnes & Noble" width={139} height={42} className="w-full h-auto" />
                    </a>
                    <a href="https://www.porchlightbooks.com/product/vulnerable-leader-tbd--jacob-morgan/isbn/9781119895244" target="_blank" rel="noopener noreferrer" className="transform hover:scale-110 transition-transform duration-300">
                      <Image src="/assets/images/porchlight.png" alt="Buy on Porchlight" width={139} height={42} className="w-full h-auto" />
                    </a>
                    <a href="https://www.booksamillion.com/p/Leading-Vulnerability/Jacob-Morgan/9781119895244?id=8876500869535#" target="_blank" rel="noopener noreferrer" className="transform hover:scale-110 transition-transform duration-300">
                      <Image src="/assets/images/bam-books.png" alt="Buy on Books-A-Million" width={139} height={42} className="w-full h-auto" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonials */}
            <div className="mt-24">
              <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {/* Seth Godin */}
                <div className="bg-gray-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-center mb-6">
                    <Image src="/assets/images/seth-scaled.jpg" alt="Seth Godin" width={80} height={80} className="w-20 h-20 rounded-full object-cover" />
                    <div className="ml-4">
                      <h4 className="font-bold text-gray-900 text-lg">SETH GODIN</h4>
                      <p className="text-sm text-gray-600">Author The Song of Significance</p>
                    </div>
                  </div>
                  <p className="text-gray-700 italic leading-relaxed">
                    "This is a well-researched, compelling book about something we spend far too little time thinking about: Being human. It works."
                  </p>
                </div>

                {/* Adam Grant */}
                <div className="bg-gray-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-center mb-6">
                    <Image src="/assets/images/adam.jpeg" alt="Adam Grant" width={80} height={80} className="w-20 h-20 rounded-full object-cover" />
                    <div className="ml-4">
                      <h4 className="font-bold text-gray-900 text-lg">ADAM GRANT</h4>
                      <p className="text-sm text-gray-600">#1 New York Times bestselling author</p>
                    </div>
                  </div>
                  <p className="text-gray-700 italic leading-relaxed">
                    &ldquo;A thoughtful, resourceful read on how leaders can be more candid about their forbles and fears without sacrificing their effectiveness. If you&apos;ve recognized the importance of vulnerability but aren&apos;t sure how to bring it into your workplace, this book is for you.&rdquo;
                  </p>
                </div>

                {/* Mel Robbins */}
                <div className="bg-gray-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-center mb-6">
                    <Image src="/assets/images/mel-robbins-scaled.jpeg" alt="Mel Robbins" width={80} height={80} className="w-20 h-20 rounded-full object-cover" />
                    <div className="ml-4">
                      <h4 className="font-bold text-gray-900 text-lg">MEL ROBBINS</h4>
                      <p className="text-sm text-gray-600">Bestselling Author Entrepreneur</p>
                    </div>
                  </div>
                  <p className="text-gray-700 italic leading-relaxed">
                    &ldquo;This book is a serious game-changer, because we&apos;ve been thinking about leadership all wrong. Whether you&apos;re a CEO of a Fortune 500 or an entrepreneur with a team of two, Leading with Vulnerability is packed with strategies and practical tools to help you become a leader who knows how to make an impact.&rdquo;
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Future Leader */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-start max-w-7xl mx-auto">
              {/* Book Image */}
              <div className="text-center lg:text-left">
                <Image
                  src="/assets/images/The_Future_Leader_Book.png"
                  alt="The Future Leader"
                  width={350}
                  height={400}
                  className="rounded-2xl transform hover:scale-105 transition-transform duration-500"
                  priority
                />
              </div>

              {/* Book Content */}
              <div className="space-y-6">
                <div>
                  <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                    The Future Leader
                  </h2>
                  <h3 className="text-xl lg:text-2xl text-orange-600 font-semibold mb-6 leading-relaxed">
                    9 Skills and Mindsets to SUCCEED in the NEXT DECADE
                  </h3>
                </div>

                <div className="prose prose-lg text-gray-700">
                  <p className="leading-relaxed mb-4">
                    Do you have what it takes to be an effective leader in the next ten years? Unfortunately, most individuals and organizations can't answer this question because they don't even know what leadership will look like in the future. Until now.
                  </p>
                  <p className="leading-relaxed">
                    There has been a lot written about leadership for the present day but the world is changing quickly. What worked in the past won't work in the future. We need to know how to prepare leaders who can successfully navigate and guide us through the next decade and beyond.
                  </p>
                </div>

                {/* Buy Now Buttons */}
                <div className="pt-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-6 uppercase tracking-wide">Buy Now At</h4>
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                    <a href="https://www.amazon.com/Future-Leader-Skills-Mindsets-Succeed/dp/1119562074" target="_blank" rel="noopener noreferrer" className="transform hover:scale-110 transition-transform duration-300">
                      <Image src="/assets/images/amazon-1.png" alt="Buy on Amazon" width={139} height={42} className="w-full h-auto" />
                    </a>
                    <a href="https://www.barnesandnoble.com/w/the-future-leader-jacob-morgan/1133426055" target="_blank" rel="noopener noreferrer" className="transform hover:scale-110 transition-transform duration-300">
                      <Image src="/assets/images/BnN.png" alt="Buy on Barnes & Noble" width={139} height={42} className="w-full h-auto" />
                    </a>
                    <a href="https://www.porchlightbooks.com" target="_blank" rel="noopener noreferrer" className="transform hover:scale-110 transition-transform duration-300">
                      <Image src="/assets/images/porchlight.png" alt="Buy on Porchlight" width={139} height={42} className="w-full h-auto" />
                    </a>
                    <a href="https://www.booksamillion.com" target="_blank" rel="noopener noreferrer" className="transform hover:scale-110 transition-transform duration-300">
                      <Image src="/assets/images/bam-books.png" alt="Buy on Books-A-Million" width={139} height={42} className="w-full h-auto" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonials */}
            <div className="mt-24">
              <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {/* Ajay Banga */}
                <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-center mb-6">
                    <Image src="/assets/images/ajay-banga.png" alt="Ajay Banga" width={80} height={80} className="w-20 h-20 rounded-full object-cover" />
                    <div className="ml-4">
                      <h4 className="font-bold text-gray-900 text-lg">AJAY BANGA</h4>
                      <p className="text-sm text-gray-600">CEO, Mastercard</p>
                    </div>
                  </div>
                  <p className="text-gray-700 italic leading-relaxed">
                    &ldquo;I applaud Jacob in assembling such a powerful and inclusive collection of voices for leaders around the world to learn from. Whether you&apos;re a current or future leader, this book is one to read and keep near you.&rdquo;
                  </p>
                </div>

                {/* Beth Comstock */}
                <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-center mb-6">
                    <Image src="/assets/images/beth-comstock.png" alt="Beth Comstock" width={80} height={80} className="w-20 h-20 rounded-full object-cover" />
                    <div className="ml-4">
                      <h4 className="font-bold text-gray-900 text-lg">BETH COMSTOCK</h4>
                      <p className="text-sm text-gray-600">Author Imagine It Forward, former Vice Chair and CMO, GE</p>
                    </div>
                  </div>
                  <p className="text-gray-700 italic leading-relaxed">
                    "Tomorrow always comes. The best leaders make room to imagine it, fund it and fight for it. Jacob Morgan shares important lessons to guide every leader toward the future. Definitely a book worth reading."
                  </p>
                </div>

                {/* Paul Polman */}
                <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-center mb-6">
                    <Image src="/assets/images/paul-polman.png" alt="Paul Polman" width={80} height={80} className="w-20 h-20 rounded-full object-cover" />
                    <div className="ml-4">
                      <h4 className="font-bold text-gray-900 text-lg">PAUL POLMAN</h4>
                      <p className="text-sm text-gray-600">Co-founder and Chair, IMAGINE and former CEO, Unilever</p>
                    </div>
                  </div>
                  <p className="text-gray-700 italic leading-relaxed">
                    &ldquo;Jacob&apos;s book answers the most pressing questions on the future of leadership. Based on impressive research, this is the guidebook for the next generation of leaders around the world.&rdquo;
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Employee Experience Advantage */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-start max-w-7xl mx-auto">
              {/* Book Image */}
              <div className="text-center lg:text-left">
                <Image
                  src="/assets/images/Employee_Experience_Advantage_Book.png"
                  alt="The Employee Experience Advantage"
                  width={350}
                  height={400}
                  className="rounded-2xl transform hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Book Content */}
              <div className="space-y-6">
                <div>
                  <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                    The Employee Experience Advantage
                  </h2>
                  <h3 className="text-xl lg:text-2xl text-orange-600 font-semibold mb-6 leading-relaxed">
                    How to Win the War for Talent by Giving Employees the Workspaces they Want, the Tools they Need, and a Culture they Can Celebrate
                  </h3>
                </div>

                <div className="prose prose-lg text-gray-700">
                  <p className="leading-relaxed mb-4">
                    Organizations that invest in employee experience are more productive, valuable, attractive, innovative, profitable, and have superior stock performance than those who don't. These "Experiential Organizations" crush the competition in every metric.
                  </p>
                  <p className="leading-relaxed">
                    Backed by an extensive research project that looked at over 150 studies and articles, featured extensive interviews with over 150 executives, and analyzed over 250 global organizations, this book clearly breaks down the three environments that make up every single employee experience at every organization around the world (culture, technology, and physical space), how to design for them, and what the tangible ROI is.
                  </p>
                </div>

                {/* Buy Now Buttons */}
                <div className="pt-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-6 uppercase tracking-wide">Buy Now At</h4>
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                    <a href="https://www.amazon.com/Employee-Experience-Advantage-Employees-Workspaces/dp/111932162X" target="_blank" rel="noopener noreferrer" className="transform hover:scale-110 transition-transform duration-300">
                      <Image src="/assets/images/amazon-1.png" alt="Buy on Amazon" width={139} height={42} className="w-full h-auto" />
                    </a>
                    <a href="https://www.barnesandnoble.com" target="_blank" rel="noopener noreferrer" className="transform hover:scale-110 transition-transform duration-300">
                      <Image src="/assets/images/BnN.png" alt="Buy on Barnes & Noble" width={139} height={42} className="w-full h-auto" />
                    </a>
                    <a href="https://www.porchlightbooks.com" target="_blank" rel="noopener noreferrer" className="transform hover:scale-110 transition-transform duration-300">
                      <Image src="/assets/images/porchlight.png" alt="Buy on Porchlight" width={139} height={42} className="w-full h-auto" />
                    </a>
                    <a href="https://www.booksamillion.com" target="_blank" rel="noopener noreferrer" className="transform hover:scale-110 transition-transform duration-300">
                      <Image src="/assets/images/bam-books.png" alt="Buy on Books-A-Million" width={139} height={42} className="w-full h-auto" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonials */}
            <div className="mt-24">
              <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {/* John Legere */}
                <div className="bg-gray-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-center mb-6">
                    <Image src="/assets/images/john-legere.png" alt="John Legere" width={80} height={80} className="w-20 h-20 rounded-full object-cover" />
                    <div className="ml-4">
                      <h4 className="font-bold text-gray-900 text-lg">JOHN LEGERE</h4>
                      <p className="text-sm text-gray-600">President & CEO, T-Mobile US</p>
                    </div>
                  </div>
                  <p className="text-gray-700 italic leading-relaxed">
                    &ldquo;Companies that invest time and energy in the employee experience will crush those that don&apos;t. This book and the research behind it proves that. Wanna win? Read this!&rdquo;
                  </p>
                </div>

                {/* Chuck Robbins */}
                <div className="bg-gray-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-center mb-6">
                    <Image src="/assets/images/booksCR.png" alt="Chuck Robbins" width={80} height={80} className="w-20 h-20 rounded-full object-cover" />
                    <div className="ml-4">
                      <h4 className="font-bold text-gray-900 text-lg">CHUCK ROBBINS</h4>
                      <p className="text-sm text-gray-600">CEO, Cisco</p>
                    </div>
                  </div>
                  <p className="text-gray-700 italic leading-relaxed">
                    &ldquo;Jacob&apos;s book shares case studies, research and unique models to demonstrate the incredible value of building amazing teams and transforming how work is done to positively impact business results.&rdquo;
                  </p>
                </div>

                {/* Hubert Joly */}
                <div className="bg-gray-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-center mb-6">
                    <Image src="/assets/images/hubertjoly.png" alt="Hubert Joly" width={80} height={80} className="w-20 h-20 rounded-full object-cover" />
                    <div className="ml-4">
                      <h4 className="font-bold text-gray-900 text-lg">HUBERT JOLY</h4>
                      <p className="text-sm text-gray-600">CEO, Best Buy</p>
                    </div>
                  </div>
                  <p className="text-gray-700 italic leading-relaxed">
                    "An inspiring, thoughtful and practical book, filled with specific ideas and concrete examples that make it an indispensable resource for anyone building a purposeful, successful and vibrant organization."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Future of Work */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-start max-w-7xl mx-auto">
              {/* Book Image */}
              <div className="text-center lg:text-left">
                <Image
                  src="/assets/images/The_Future_of_Work_Book.png"
                  alt="The Future of Work"
                  width={350}
                  height={400}
                  className="rounded-2xl transform hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Book Content */}
              <div className="space-y-6">
                <div>
                  <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                    The Future of Work
                  </h2>
                  <h3 className="text-xl lg:text-2xl text-orange-600 font-semibold mb-6 leading-relaxed">
                    Attract New Talent, Build Better Leaders, and Create a Competitive Organization (Wiley, Sept. 2014)
                  </h3>
                </div>

                <div className="prose prose-lg text-gray-700">
                  <p className="leading-relaxed mb-4">
                    <em>The Future of Work</em> is all about challenging convention around work. It explores and answers several questions such as: How is the world of work changing and what are the trends driving that change? How are these changes impacting the way employees work, the way managers lead, and how organizations are structured? What needs to be done to adapt to these changes?
                  </p>
                  <p className="leading-relaxed">
                    The future of work breaks down specific principles for employees, managers, and organizations to adopt in order to stay relevant and competitive in a rapidly changing world. Readers will find valuable examples, research, and unique visuals created specifically for this book. <em>The Future of Work</em> has been endorsed by the world's top business leaders such as the CEO of KPMG, CEO of SAP, CEO of Intuit, CEO of Whirlpool, CEO of Schneider Electric, CEO of Mandalay Entertainment, CEO of PARC, CEO of Zappos, Dan Pink, and Gary Hamel.
                  </p>
                </div>

                {/* Buy Now Buttons */}
                <div className="pt-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-6 uppercase tracking-wide">Buy Now At</h4>
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                    <a href="https://www.amazon.com/Future-Work-Attract-Competitive-Organization/dp/1118877241" target="_blank" rel="noopener noreferrer" className="transform hover:scale-110 transition-transform duration-300">
                      <Image src="/assets/images/amazon-1.png" alt="Buy on Amazon" width={139} height={42} className="w-full h-auto" />
                    </a>
                    <a href="https://www.barnesandnoble.com" target="_blank" rel="noopener noreferrer" className="transform hover:scale-110 transition-transform duration-300">
                      <Image src="/assets/images/BnN.png" alt="Buy on Barnes & Noble" width={139} height={42} className="w-full h-auto" />
                    </a>
                    <a href="https://www.porchlightbooks.com" target="_blank" rel="noopener noreferrer" className="transform hover:scale-110 transition-transform duration-300">
                      <Image src="/assets/images/porchlight.png" alt="Buy on Porchlight" width={139} height={42} className="w-full h-auto" />
                    </a>
                    <a href="https://www.booksamillion.com" target="_blank" rel="noopener noreferrer" className="transform hover:scale-110 transition-transform duration-300">
                      <Image src="/assets/images/bam-books.png" alt="Buy on Books-A-Million" width={139} height={42} className="w-full h-auto" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonials */}
            <div className="mt-24">
              <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {/* John Veihmeyer */}
                <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-center mb-6">
                    <Image src="/assets/images/booksJV.png" alt="John Veihmeyer" width={80} height={80} className="w-20 h-20 rounded-full object-cover" />
                    <div className="ml-4">
                      <h4 className="font-bold text-gray-900 text-lg">JOHN VEIHMEYER</h4>
                      <p className="text-sm text-gray-600">Global Chairman of KPMG</p>
                    </div>
                  </div>
                  <p className="text-gray-700 italic leading-relaxed">
                    "The Future of Work provides valuable insights that will help organizations seize opportunities in this rapidly changing landscape, transforming a possible vulnerability into a competitive strength."
                  </p>
                </div>

                {/* Bill McDermott */}
                <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-center mb-6">
                    <Image src="/assets/images/booksBM.png" alt="Bill McDermott" width={80} height={80} className="w-20 h-20 rounded-full object-cover" />
                    <div className="ml-4">
                      <h4 className="font-bold text-gray-900 text-lg">BILL MCDERMOTT</h4>
                      <p className="text-sm text-gray-600">CEO, SAP</p>
                    </div>
                  </div>
                  <p className="text-gray-700 italic leading-relaxed">
                    &ldquo;Jacob cracks the code on the biggest mystery in the workplace, what it takes to build and sustain a new generation of loyal, engaged, and inspired colleagues. It&apos;s impossible to read this book and not challenge the status quo.&rdquo;
                  </p>
                </div>

                {/* Daniel H. Pink */}
                <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-center mb-6">
                    <Image src="/assets/images/daniel-pink.png" alt="Daniel H. Pink" width={80} height={80} className="w-20 h-20 rounded-full object-cover" />
                    <div className="ml-4">
                      <h4 className="font-bold text-gray-900 text-lg">DANIEL H. PINK</h4>
                      <p className="text-sm text-gray-600">Best-selling Author, When, Drive, and To Sell is Human</p>
                    </div>
                  </div>
                  <p className="text-gray-700 italic leading-relaxed">
                    &ldquo;Morgan&apos;s book offers a compelling look into the future -- how all of us will work, how many of us will lead, and how organizations themselves must transform in the face of these changes.&rdquo;
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Collaborative Organization */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-start max-w-7xl mx-auto">
              {/* Book Image */}
              <div className="text-center lg:text-left">
                <Image
                  src="/assets/images/Collaborative_Organization_Book.png"
                  alt="The Collaborative Organization"
                  width={350}
                  height={400}
                  className="rounded-2xl transform hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Book Content */}
              <div className="space-y-6">
                <div>
                  <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4 leading-tight">
                    The Collaborative Organization
                  </h2>
                  <h3 className="text-xl lg:text-2xl text-orange-600 font-semibold mb-6 leading-relaxed">
                    A Strategic Guide to Solving Your Internal Business Challenges Using Emerging Social and Collaborative Tools (McGraw Hill, 2012)
                  </h3>
                </div>

                <div className="prose prose-lg text-gray-700">
                  <p className="leading-relaxed mb-4">
                    The Collaborative Organization is the first and only comprehensive strategy guide to enterprise/social collaboration in the workplace. It features over 300 pages of content covering topics such as developing and mapping use cases, selecting collaboration vendors, full strategy development, ROI, employee adoption, how to structure a collaboration team, and everything else you would need and want to build out a full-scale collaboration initiative.
                  </p>
                  <p className="leading-relaxed">
                    The Collaborative Organization features data from an in-depth research project conducted by Chess Media Group as well as pioneering models and concepts around collaboration. The book was endorsed by business leaders such as the CEO of Unisys, CIO of the USA, CMO of Dell, Chair of the MIT Sloan Management Review, Founder and CEO of Craigslist, and many others. The afterword was written by Don Tapscott.
                  </p>
                </div>

                {/* Buy Now Buttons */}
                <div className="pt-6">
                  <h4 className="text-lg font-bold text-gray-900 mb-6 uppercase tracking-wide">Buy Now At</h4>
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                    <a href="https://www.amazon.com/Collaborative-Organization-Strategic-Internal-Challenges/dp/0071808663" target="_blank" rel="noopener noreferrer" className="transform hover:scale-110 transition-transform duration-300">
                      <Image src="/assets/images/amazon-1.png" alt="Buy on Amazon" width={139} height={42} className="w-full h-auto" />
                    </a>
                    <a href="https://www.barnesandnoble.com" target="_blank" rel="noopener noreferrer" className="transform hover:scale-110 transition-transform duration-300">
                      <Image src="/assets/images/BnN.png" alt="Buy on Barnes & Noble" width={139} height={42} className="w-full h-auto" />
                    </a>
                    <a href="https://www.porchlightbooks.com" target="_blank" rel="noopener noreferrer" className="transform hover:scale-110 transition-transform duration-300">
                      <Image src="/assets/images/porchlight.png" alt="Buy on Porchlight" width={139} height={42} className="w-full h-auto" />
                    </a>
                    <a href="https://www.booksamillion.com" target="_blank" rel="noopener noreferrer" className="transform hover:scale-110 transition-transform duration-300">
                      <Image src="/assets/images/bam-books.png" alt="Buy on Books-A-Million" width={139} height={42} className="w-full h-auto" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonials */}
            <div className="mt-24">
              <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {/* Karen Quintos */}
                <div className="bg-gray-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-center mb-6">
                    <Image src="/assets/images/karen-quintos.png" alt="Karen Quintos" width={80} height={80} className="w-20 h-20 rounded-full object-cover" />
                    <div className="ml-4">
                      <h4 className="font-bold text-gray-900 text-lg">KAREN QUINTOS</h4>
                      <p className="text-sm text-gray-600">Chief Customer Officer, Dell</p>
                    </div>
                  </div>
                  <p className="text-gray-700 italic leading-relaxed">
                    "This book gets to the very real issues that all companies continue to face. Social and collaborative tools are certainly part of the picture, but Morgan goes beyond this to look at true enterprise wide collaboration that is inextricably tied to business strategy."
                  </p>
                </div>

                {/* Nathan Bricklin */}
                <div className="bg-gray-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-center mb-6">
                    <Image src="/assets/images/nathan-bricklin.png" alt="Nathan Bricklin" width={80} height={80} className="w-20 h-20 rounded-full object-cover" />
                    <div className="ml-4">
                      <h4 className="font-bold text-gray-900 text-lg">NATHAN BRICKLIN</h4>
                      <p className="text-sm text-gray-600">Head of Workplace Experience, Wells Fargo</p>
                    </div>
                  </div>
                  <p className="text-gray-700 italic leading-relaxed">
                    "A fresh, honest, and actionable guide to internal collaboration. This book delivers practical insight into what it takes to successfully launch, maintain, and evolve the initiatives that are designed to address collaboration challenges unique to your business. A valuable read."
                  </p>
                </div>

                {/* Erik Brynjolfsson */}
                <div className="bg-gray-50 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-center mb-6">
                    <Image src="/assets/images/booksEB.png" alt="Erik Brynjolfsson" width={80} height={80} className="w-20 h-20 rounded-full object-cover" />
                    <div className="ml-4">
                      <h4 className="font-bold text-gray-900 text-lg">ERIK BRYNJOLFSSON</h4>
                      <p className="text-sm text-gray-600">Coauthor, The Second Machine Age and Race Against the Machine</p>
                    </div>
                  </div>
                  <p className="text-gray-700 italic leading-relaxed">
                    "Most business leaders understand how critical collaborative tools are to the success of their companies. What they need now is a guide based on hard data and practical experiences that shows how to put those tools to work. Morgan fills that need with this book."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="bg-white border-t border-[#D1D5DB] py-6">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-[#334155]">
            &copy; 2025 Jacob Morgan. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}