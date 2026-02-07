from playwright.sync_api import sync_playwright

def run():
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page()
        print("Navigating to /about...")
        page.goto("http://localhost:3000/about", timeout=60000)

        # Wait for the page to load and Technical skills to be visible
        print("Navigated to /about")
        try:
            page.wait_for_selector("text=Technical skills", timeout=30000)
            print("Found Technical skills section")
        except:
            print("Could not find Technical skills section. Taking debug screenshot.")
            page.screenshot(path="verification/debug_not_found.png")
            return

        # Find an image in the Technical skills section.
        # SmartImage renders an image. We can look for alt text "BimsUI - Modern React component library..."
        # or just the first image in that section.

        # The structure is Column -> Flex -> Flex (SmartImage wrapper) -> Image
        # The wrapper handles the click.

        # Let's target by alt text.
        image_alt = "BimsUI - Modern React component library with TypeScript and Tailwind CSS"
        image_locator = page.get_by_alt_text(image_alt).first

        # Wait for image to be visible
        try:
            image_locator.wait_for(state="visible", timeout=10000)
        except:
             print(f"Image with alt '{image_alt}' not found/visible. Taking debug screenshot.")
             page.screenshot(path="verification/debug_image_not_found.png")
             return

        print(f"Clicking image with alt: {image_alt}")
        # We need to click the PARENT of the image because SmartImage wrapper handles the click.
        # But clicking the image propagates to parent.
        image_locator.click()

        # Wait for transition (enlarge animation)
        page.wait_for_timeout(2000)

        # Screenshot enlarged
        page.screenshot(path="verification/enlarged.png")
        print("Enlarged screenshot taken.")

        # Press Escape to close
        page.keyboard.press("Escape")

        # Wait for transition (close animation)
        page.wait_for_timeout(2000)

        # Screenshot closed
        page.screenshot(path="verification/closed.png")
        print("Closed screenshot taken.")

if __name__ == "__main__":
    run()
