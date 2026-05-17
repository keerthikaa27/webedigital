import { Container } from "@/components/site-shell/container";
import { channelCards } from "@/data/home";

function ChannelIcon({ index }: { index: number }) {
  if (index === 0) {
    return (
      <svg width="52" height="52" viewBox="0 0 52 52" fill="none" aria-hidden="true">
        <path d="M10 10H38C41.3 10 44 12.7 44 16C44 19.3 41.3 22 38 22H28L40 34C42.4 36.4 42.4 40.3 40 42.7C37.6 45.1 33.7 45.1 31.3 42.7L12 23.4C8.2 19.6 10.9 13 16.3 13H10Z" fill="#8FD15D"/>
        <path d="M13 25H29L15 39H29" stroke="#3558A8" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    );
  }

  if (index === 1) {
    return (
      <svg width="52" height="52" viewBox="0 0 52 52" fill="none" aria-hidden="true">
        <rect x="8" y="9" width="28" height="28" rx="3" fill="#98D868" />
        <rect x="14" y="15" width="20" height="20" rx="2" fill="#F1F5EC" />
        <rect x="18" y="19" width="5" height="5" fill="#4B8FD3" />
        <rect x="25" y="19" width="5" height="5" fill="#4B8FD3" />
        <rect x="18" y="26" width="12" height="7" fill="#7BC6D3" />
        <rect x="6" y="39" width="34" height="5" rx="2.5" fill="#4056A8" />
      </svg>
    );
  }

  return (
    <svg width="52" height="52" viewBox="0 0 52 52" fill="none" aria-hidden="true">
      <circle cx="26" cy="26" r="6" fill="#8FD15D" />
      <path d="M26 6V18" stroke="#8FD15D" strokeWidth="6" strokeLinecap="round" />
      <path d="M26 34V46" stroke="#8FD15D" strokeWidth="6" strokeLinecap="round" />
      <path d="M6 26H18" stroke="#4B8FD3" strokeWidth="6" strokeLinecap="round" />
      <path d="M34 26H46" stroke="#4B8FD3" strokeWidth="6" strokeLinecap="round" />
      <path d="M12 12L20 20" stroke="#7BC6D3" strokeWidth="6" strokeLinecap="round" />
      <path d="M32 32L40 40" stroke="#7BC6D3" strokeWidth="6" strokeLinecap="round" />
      <path d="M12 40L20 32" stroke="#8FD15D" strokeWidth="6" strokeLinecap="round" />
      <path d="M32 20L40 12" stroke="#4B8FD3" strokeWidth="6" strokeLinecap="round" />
    </svg>
  );
}

export function ChannelColumns() {
  return (
    <section className="bg-[#f6f9f7] py-8 md:py-24">
      <Container>
        <div className="grid gap-9 xl:grid-cols-3">
          {channelCards.map((card, index) => (
            <article
              key={card.title}
              className="min-h-[488px] rounded-[28px] bg-white px-9 pb-8 pt-8 shadow-[0_12px_42px_rgba(24,60,92,0.08)]"
            >
              <ChannelIcon index={index} />
              <h3 className="mt-8 max-w-[300px] text-[28px] font-semibold leading-[1.06] tracking-[-0.035em] text-[#181f4b]">
                {card.title}
              </h3>
              <p className="mt-7 max-w-[305px] text-[17px] leading-[1.55] tracking-[-0.01em] text-[#3f465d]">
                {card.description}
              </p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
