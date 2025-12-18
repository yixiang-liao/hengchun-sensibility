from PIL import Image
import os

ROOT_DIR = "."

# === 條件設定 ===
MIN_SIZE_KB = 500        # 只壓縮超過這個大小的圖片
MAX_WIDTH = 1920         # 最大寬度
JPEG_QUALITY = 80
WEBP_QUALITY = 80
PNG_COMPRESS_LEVEL = 9

SUPPORTED_EXT = (".jpg", ".jpeg")


def compress_image(path):
    ext = os.path.splitext(path)[1].lower()

    # === 檔案大小判斷 ===
    size_kb = os.path.getsize(path) / 1024
    if size_kb < MIN_SIZE_KB:
        print(f"↪ 跳過（{int(size_kb)}KB）：{path}")
        return

    try:
        with Image.open(path) as img:
            # === 等比例縮放 ===
            if img.width > MAX_WIDTH:
                ratio = MAX_WIDTH / img.width
                new_size = (MAX_WIDTH, int(img.height * ratio))
                img = img.resize(new_size, Image.LANCZOS)

            # === 依原格式壓縮 ===
            if ext in (".jpg", ".jpeg"):
                img = img.convert("RGB")
                img.save(
                    path,
                    quality=JPEG_QUALITY,
                    optimize=True,
                    progressive=True
                )

            elif ext == ".webp":
                img.save(
                    path,
                    quality=WEBP_QUALITY,
                    method=6
                )

            print(f"✔ 壓縮完成（{int(size_kb)}KB）：{path}")

    except Exception as e:
        print(f"✖ 失敗：{path} | {e}")


def run():
    for root, _, files in os.walk(ROOT_DIR):
        for file in files:
            if file.lower().endswith(SUPPORTED_EXT):
                compress_image(os.path.join(root, file))


if __name__ == "__main__":
    run()
