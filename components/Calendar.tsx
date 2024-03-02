export default function Calendar() {
  return (
    <>
      <iframe
        className="hidden lg:block overflow-hidden"
        src="https://calendar.google.com/calendar/embed?mode=MONTH&amp;&wkst=1&ctz=America%2FNew_York&bgcolor=%23ffffff&showPrint=0&src=YzM1YzFlMGI4MDQ3MDUzNjdmN2RiMzExOWEzMTgzMjhkZTVlYzEwNjE5MzAzMWE4OThlNTYyOWZiMzBjZjg3ZUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%237CB342"
        style={{ border: 0 }}
        width={800}
        height={600}
        allowFullScreen
      />
      <iframe
        className="hidden md:block lg:hidden overflow-hidden"
        src="https://calendar.google.com/calendar/embed?mode=MONTH&amp;&wkst=1&ctz=America%2FNew_York&bgcolor=%23ffffff&showPrint=0&src=YzM1YzFlMGI4MDQ3MDUzNjdmN2RiMzExOWEzMTgzMjhkZTVlYzEwNjE5MzAzMWE4OThlNTYyOWZiMzBjZjg3ZUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%237CB342"
        style={{ border: 0 }}
        width={600}
        height={400}
        allowFullScreen
      />
      <div className="relative pb-[75%] h-0 overflow-hidden md:hidden">
        <iframe
          src="https://calendar.google.com/calendar/embed?mode=AGENDA&amp;height=600&wkst=1&ctz=America%2FNew_York&bgcolor=%23ffffff&showPrint=0&showTz=0&showCalendars=0&showTabs=0&src=YzM1YzFlMGI4MDQ3MDUzNjdmN2RiMzExOWEzMTgzMjhkZTVlYzEwNjE5MzAzMWE4OThlNTYyOWZiMzBjZjg3ZUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%237CB342"
          style={{ border: 0 }}
          width={280}
          height={500}
        />
      </div>
    </>
  );
}
