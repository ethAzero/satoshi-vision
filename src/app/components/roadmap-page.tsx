export default function RoadmapPage() {
  return (
    <div>
      <section id="roadmap">
        <div className="bg-black text-white py-2">
          <div className="container mx-auto flex flex-col items-start md:flex-row my-12 md:my-8">
            <div className="flex flex-col w-full sticky md:top-36 lg:w-1/3 mt-2 md:mt-12 px-8">
              <p className="ml-2 text-yellow-300 uppercase tracking-loose">
                Working Process
              </p>
              <p className="text-3xl md:text-4xl leading-normal md:leading-relaxed mb-2">
                Roadmap
              </p>
              <p className="text-sm md:text-base text-gray-50 mb-4">
                Here to guide you to know our work progress. Go through all the
                steps to know the exact process.
              </p>
            </div>
            <div className="ml-0 md:ml-12 lg:w-2/3 sticky">
              <div className="container mx-auto w-full h-full">
                <div className="relative wrap overflow-hidden p-10 h-full">
                  <div className="border-2-2 border-yellow-555 absolute h-full border-2 right-1/2 border-yellow-400 rounded"></div>
                  <div className="border-2-2 border-yellow-555 absolute h-full border-2 right-1/2 border-yellow-400 rounded"></div>
                  <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                    <div className="order-1 w-5/12"></div>
                    <div className="order-1 w-5/12 px-1 py-4 text-right">
                      <h4 className="mb-3 font-bold text-lg md:text-2xl text-yellow-300">
                        Phase 1
                      </h4>
                      <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                        ✅ Comprehensive Data Aggregation. <br />
                        ✅ AI Training and Optimization. <br />
                        ✅ ion. Beta Testing and Refinement. <br />
                      </p>
                    </div>
                  </div>
                  <div className="mb-8 flex justify-between items-center w-full right-timeline">
                    <div className="order-1 w-5/12"></div>
                    <div className="order-1 w-5/12 px-1 py-4 text-right">
                      <h4 className="text-start mb-3 font-bold text-lg md:text-2xl text-yellow-300">
                        Phase 2
                      </h4>
                      <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100 text-start">
                        ✅ Analytics Dashboard, Whale Monitoring & DeFi
                        Dashsboard. <br />
                        ✅ Multichain-bridge to Solana. <br />
                        ✅ Autonomous trading agent powered by Saint AI. <br />
                        ✅ On-chain hedge fund manager powered by Saint X
                        daos.fun <br />
                      </p>
                    </div>
                  </div>
                  <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
                    <div className="order-1 w-5/12"></div>
                    <div className="order-1 w-5/12 px-1 py-4 text-right">
                      <h4 className="mb-3 font-bold text-lg md:text-2xl text-yellow-300">
                        Phase 3
                      </h4>
                      <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100">
                        ✅ Interoperability. <br />
                        ✅ Enhanced Security Tools. <br />
                        ✅ Comprehensive Ecosystem Integration. <br />
                      </p>
                    </div>
                  </div>

                  <div className="mb-8 flex justify-between items-center w-full right-timeline">
                    <div className="order-1 w-5/12"></div>
                    <div className="order-1 w-5/12 px-1 py-4 text-right">
                      <h4 className="text-start mb-3 font-bold text-lg md:text-2xl text-yellow-300">
                        Phase 4
                      </h4>
                      <p className="text-sm md:text-base leading-snug text-gray-50 text-opacity-100 text-start">
                        ✅ Decentralized Architecture. <br />
                        ✅ Community-Led Decision Making. <br />
                        ✅ Sustainability and Growth. <br />
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
