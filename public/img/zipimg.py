from PIL import Image
import os

# === 設定 ===
ROOT_DIR = "."            # 目前路徑（重點）
MAX_WIDTH = 1920          # 網站常用最大寬
JPEG_QUALITY = 80         # 70~85 之間都合理

SUPPORTED_EXT = (".jpg", ".jpeg", ".png", ".webp")


def compress_image(path):
    try:
        with Image.open(path) as img:
            img = img.convert("RGB")

            # 等比例縮放
            if img.width > MAX_WIDTH:
                ratio = MAX_WIDTH / img.width
                new_size = (MAX_WIDTH, int(img.height * ratio))
                img = img.resize(new_size, Image.LANCZOS)

            # 直接覆蓋原檔
            img.save(
                path,
                format="JPEG",
                quality=JPEG_QUALITY,
                optimize=True,
                progressive=True,
            )

            print(f"✔ 壓縮完成：{path}")

    except Exception as e:
        print(f"✖ 失敗：{path} | {e}")


def run():
    for root, _, files in os.walk(ROOT_DIR):
        for file in files:
            if file.lower().endswith(SUPPORTED_EXT):
                full_path = os.path.join(root, file)
                compress_image(full_path)


if __name__ == "__main__":
    run()
