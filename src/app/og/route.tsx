import { ImageResponse } from "next/og";
import { baseURL } from "@/app/resources";
import { person } from "@/app/resources/content";

export const runtime = "edge";

export async function GET(request: Request) {
  let url = new URL(request.url);
  let title = url.searchParams.get("title") || "Portfolio";
  const font = fetch(new URL("../../../public/fonts/Inter.ttf", import.meta.url)).then((res) =>
    res.arrayBuffer(),
  );
  const image = fetch(new URL("../../../public/images/bima4.jpeg", import.meta.url)).then((res) =>
    res.arrayBuffer(),
  );

  const [fontData, imageData] = await Promise.all([font, image]);
  const imageSrc = `data:image/jpeg;base64,${Buffer.from(imageData).toString("base64")}`;

  return new ImageResponse(
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "100%",
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)",
        position: "relative",
      }}
    >
      {/* Animated gradient overlay */}
      <div
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          background:
            "radial-gradient(circle at 20% 50%, rgba(120, 119, 198, 0.3), transparent 50%), radial-gradient(circle at 80% 80%, rgba(255, 103, 145, 0.3), transparent 50%)",
          opacity: 0.6,
        }}
      />

      {/* Main content container */}
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          padding: "60px 80px",
          position: "relative",
          zIndex: 10,
        }}
      >
        {/* Left side - Content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "100%",
            fontFamily: "Inter",
          }}
        >
          {/* Top section - Title */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
            }}
          >
            {/* Badge */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                background: "rgba(255, 255, 255, 0.15)",
                backdropFilter: "blur(10px)",
                padding: "12px 24px",
                borderRadius: "50px",
                alignSelf: "flex-start",
                border: "2px solid rgba(255, 255, 255, 0.2)",
              }}
            >
              <div
                style={{
                  width: "12px",
                  height: "12px",
                  borderRadius: "50%",
                  background: "#4ade80",
                  boxShadow: "0 0 20px rgba(74, 222, 128, 0.8)",
                }}
              />
              <span
                style={{
                  color: "white",
                  fontSize: "20px",
                  fontWeight: "600",
                  letterSpacing: "0.5px",
                }}
              >
                AVAILABLE FOR WORK
              </span>
            </div>

            {/* Main Title */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "10px",
              }}
            >
              <span
                style={{
                  fontSize: "72px",
                  fontWeight: "900",
                  color: "white",
                  lineHeight: "1.1",
                  letterSpacing: "-0.03em",
                  textShadow: "0 4px 30px rgba(0, 0, 0, 0.3)",
                  maxWidth: "900px",
                }}
              >
                {title}
              </span>
              {/* Accent line */}
              <div
                style={{
                  width: "120px",
                  height: "6px",
                  background: "linear-gradient(90deg, #fbbf24, #f59e0b)",
                  borderRadius: "3px",
                  boxShadow: "0 4px 15px rgba(251, 191, 36, 0.5)",
                }}
              />
            </div>
          </div>

          {/* Bottom section - Profile */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              background: "rgba(255, 255, 255, 0.1)",
              backdropFilter: "blur(20px)",
              padding: "30px 40px",
              borderRadius: "24px",
              border: "2px solid rgba(255, 255, 255, 0.2)",
              boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
            }}
          >
            {/* Profile info */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "30px",
              }}
            >
              {/* Avatar with glow */}
              <div
                style={{
                  display: "flex",
                  position: "relative",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    width: "100px",
                    height: "100px",
                    borderRadius: "50%",
                    background: "linear-gradient(45deg, #667eea, #764ba2)",
                    filter: "blur(20px)",
                    opacity: 0.8,
                  }}
                />
                <img
                src={imageSrc}
                  style={{
                    width: "100px",
                    height: "100px",
                    borderRadius: "50%",
                    objectFit: "cover",
                    border: "4px solid rgba(255, 255, 255, 0.3)",
                    position: "relative",
                  }}
                />
              </div>

              {/* Name and role */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "8px",
                }}
              >
                <span
                  style={{
                    fontSize: "36px",
                    fontWeight: "700",
                    color: "white",
                    letterSpacing: "-0.02em",
                  }}
                >
                  {person.name}
                </span>
                <span
                  style={{
                    fontSize: "24px",
                    fontWeight: "500",
                    color: "rgba(255, 255, 255, 0.85)",
                    letterSpacing: "0.5px",
                  }}
                >
                  {person.role}
                </span>
              </div>
            </div>

            {/* Tech stack badges */}
            <div
              style={{
                display: "flex",
                gap: "12px",
                alignItems: "center",
              }}
            >
              <div
                style={{
                  background: "rgba(255, 255, 255, 0.15)",
                  padding: "10px 20px",
                  borderRadius: "12px",
                  fontSize: "18px",
                  color: "white",
                  fontWeight: "600",
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                }}
              >
                Next.js
              </div>
              <div
                style={{
                  background: "rgba(255, 255, 255, 0.15)",
                  padding: "10px 20px",
                  borderRadius: "12px",
                  fontSize: "18px",
                  color: "white",
                  fontWeight: "600",
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                }}
              >
                React
              </div>
              <div
                style={{
                  background: "rgba(255, 255, 255, 0.15)",
                  padding: "10px 20px",
                  borderRadius: "12px",
                  fontSize: "18px",
                  color: "white",
                  fontWeight: "600",
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                }}
              >
                TypeScript
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div
        style={{
          position: "absolute",
          top: "-100px",
          right: "-100px",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(255, 255, 255, 0.1), transparent 70%)",
          filter: "blur(60px)",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "-150px",
          left: "-150px",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(255, 255, 255, 0.08), transparent 70%)",
          filter: "blur(80px)",
        }}
      />
    </div>,
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: "Inter",
          data: fontData,
          style: "normal",
        },
      ],
    },
  );
}
