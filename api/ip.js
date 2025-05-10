export default function handler(req, res) {
  const key = req.query.key;
  
  if (key === undefined) {
    res.setHeader("Content-Type", "text/html");
    res.status(200).send(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>Access Denied</title>
          <style>
            body, html {
              margin: 0;
              padding: 0;
              height: 100%;
              overflow: hidden;
              background-color: #000;
            }
            #jumpscare-video {
              position: fixed;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              object-fit: cover;
              z-index: 999;
            }
          </style>
        </head>
        <body>
          <video id="jumpscare-video" src="/jumpscare.mp4" preload="auto"></video>
          <script>
            document.addEventListener('DOMContentLoaded', function() {
              const requestFullscreen = () => {
                const element = document.documentElement;
                if (element.requestFullscreen) {
                  element.requestFullscreen();
                } else if (element.webkitRequestFullscreen) {
                  element.webkitRequestFullscreen();
                } else if (element.msRequestFullscreen) {
                  element.msRequestFullscreen();
                }
              };
              requestFullscreen();
              const video = document.getElementById('jumpscare-video');
              video.volume = 1.0;
              setTimeout(() => {
                document.addEventListener('click', requestFullscreen, { once: true });
                const playPromise = video.play();
                if (playPromise !== undefined) {
                  playPromise.catch(error => {
                    document.addEventListener('click', () => {
                      video.play();
                    }, { once: true });
                  });
                }
              }, 500);
            });
          </script>
        </body>
      </html>
    `);
    return;
  }
  
  if (key === "2504") {
    res.setHeader("Content-Type", "text/plain");
    res.status(200).send("127.0.0.1");
  } else {
    res.setHeader("Content-Type", "text/plain");
    const fakeIps = [
      "192.168.1." + Math.floor(Math.random() * 255),
      "10.0." + Math.floor(Math.random() * 255) + "." + Math.floor(Math.random() * 255),
      "172." + (Math.floor(Math.random() * 16) + 16) + "." + Math.floor(Math.random() * 255) + "." + Math.floor(Math.random() * 255),
      "34.192." + Math.floor(Math.random() * 255) + "." + Math.floor(Math.random() * 255),
      "54.230." + Math.floor(Math.random() * 255) + "." + Math.floor(Math.random() * 255),
      "13.32." + Math.floor(Math.random() * 255) + "." + Math.floor(Math.random() * 255),
      "104.16." + Math.floor(Math.random() * 255) + "." + Math.floor(Math.random() * 255),
      "157.240." + Math.floor(Math.random() * 255) + "." + Math.floor(Math.random() * 255)
    ];
    const randomIp = fakeIps[Math.floor(Math.random() * fakeIps.length)];
    res.status(200).send(randomIp);
  }
}
