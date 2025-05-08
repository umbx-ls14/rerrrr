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
    res.status(200).send("5511");
  } else {
    res.setHeader("Content-Type", "text/plain");
    const commonPorts = [
      "80",
      "443",
      "22",
      "21",
      "25",
      "3306",
      "5432",
      "27017",
      "6379",
      "8080",
      "8443",
      "9000",
      "3000",
      "4000",
      "1194",
      "3389",
      "5900",
      "1433",
      "6000",
      "7000",
      String(Math.floor(Math.random() * 10000) + 10000),
      String(Math.floor(Math.random() * 60000) + 1024)
    ];
    const randomPort = commonPorts[Math.floor(Math.random() * commonPorts.length)];
    res.status(200).send(randomPort);
  }
}
